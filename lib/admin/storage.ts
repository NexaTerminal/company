import fs from 'fs/promises';
import path from 'path';

// Storage abstraction over repo-relative content files.
//  - fs driver: reads/writes local files (development).
//  - github driver: reads/writes via the GitHub Contents API (production on
//    Vercel, whose runtime filesystem is read-only). Each write is a commit,
//    which triggers a redeploy so the new content goes live.

export type ContentFile = { content: string; sha: string | null };

export interface StorageDriver {
  readonly kind: 'fs' | 'github';
  readFile(relPath: string): Promise<ContentFile>;
  writeFile(relPath: string, content: string, message: string, sha: string | null): Promise<{ sha: string | null }>;
}

function pickDriver(): 'fs' | 'github' {
  const explicit = process.env.STORAGE_DRIVER;
  if (explicit === 'fs' || explicit === 'github') return explicit;
  return process.env.NODE_ENV === 'production' ? 'github' : 'fs';
}

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

// -------------------- Filesystem driver (dev) --------------------
const fsDriver: StorageDriver = {
  kind: 'fs',
  async readFile(relPath) {
    const p = path.join(process.cwd(), relPath);
    const content = await fs.readFile(p, 'utf-8');
    return { content, sha: null };
  },
  async writeFile(relPath, content, _message, _sha) {
    const p = path.join(process.cwd(), relPath);
    await fs.mkdir(path.dirname(p), { recursive: true });
    await fs.writeFile(p, content.endsWith('\n') ? content : content + '\n', 'utf-8');
    return { sha: null };
  },
};

// -------------------- GitHub driver (prod) --------------------
type GhFileResponse = { content: string; encoding: 'base64'; sha: string };
type GhWriteResponse = { content: { sha: string; path: string } };

async function gh<T>(url: string, init: RequestInit = {}): Promise<T> {
  const token = requireEnv('GITHUB_TOKEN');
  const res = await fetch(`https://api.github.com${url}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`GitHub API ${res.status} ${res.statusText}: ${body.slice(0, 300)}`);
  }
  return (await res.json()) as T;
}

function repoBase() {
  return `/repos/${requireEnv('GITHUB_REPO')}`;
}
function branch() {
  return process.env.GITHUB_BRANCH || 'main';
}

const githubDriver: StorageDriver = {
  kind: 'github',
  async readFile(relPath) {
    const data = await gh<GhFileResponse>(
      `${repoBase()}/contents/${relPath.split('/').map(encodeURIComponent).join('/')}?ref=${encodeURIComponent(branch())}`
    );
    const content = Buffer.from(data.content, data.encoding).toString('utf-8');
    return { content, sha: data.sha };
  },
  async writeFile(relPath, content, message, sha) {
    const body: Record<string, unknown> = {
      message,
      content: Buffer.from(content.endsWith('\n') ? content : content + '\n', 'utf-8').toString('base64'),
      branch: branch(),
    };
    if (sha) body.sha = sha;
    const data = await gh<GhWriteResponse>(
      `${repoBase()}/contents/${relPath.split('/').map(encodeURIComponent).join('/')}`,
      { method: 'PUT', body: JSON.stringify(body) }
    );
    return { sha: data.content.sha };
  },
};

let _driver: StorageDriver | null = null;
export function getStorage(): StorageDriver {
  if (!_driver) _driver = pickDriver() === 'github' ? githubDriver : fsDriver;
  return _driver;
}
