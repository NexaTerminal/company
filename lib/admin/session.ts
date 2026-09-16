// Signed-cookie admin session using Web Crypto (HMAC-SHA256).
// Runs in both the Edge middleware and Node route handlers (Node 18+ exposes
// crypto.subtle globally), so there is a single implementation.

export const ADMIN_COOKIE = 'nexa_admin_session';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  return (
    process.env.SESSION_SECRET ||
    // Dev-only fallback so local runs don't crash if the secret is unset.
    'development-only-insecure-secret-change-me-please-0000000000000000'
  );
}

const encoder = new TextEncoder();

function b64urlEncode(bytes: Uint8Array): string {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function b64urlEncodeStr(s: string): string {
  return b64urlEncode(encoder.encode(s));
}

function b64urlDecodeToStr(s: string): string {
  const pad = s.length % 4 === 0 ? '' : '='.repeat(4 - (s.length % 4));
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + pad);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

async function hmac(message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(getSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
  return b64urlEncode(new Uint8Array(sig));
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

export interface AdminSession {
  user: string;
  exp: number; // epoch seconds
}

/** Create a signed session token for the given user. */
export async function signSession(user: string): Promise<string> {
  const payload: AdminSession = {
    user,
    exp: Math.floor(Date.now() / 1000) + MAX_AGE_SECONDS,
  };
  const body = b64urlEncodeStr(JSON.stringify(payload));
  const sig = await hmac(body);
  return `${body}.${sig}`;
}

/** Verify a token; returns the session if valid and unexpired, else null. */
export async function verifySession(token: string | undefined | null): Promise<AdminSession | null> {
  if (!token) return null;
  const dot = token.lastIndexOf('.');
  if (dot <= 0) return null;
  const body = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = await hmac(body);
  if (!timingSafeEqual(sig, expected)) return null;
  try {
    const parsed = JSON.parse(b64urlDecodeToStr(body)) as AdminSession;
    if (!parsed?.user || typeof parsed.exp !== 'number') return null;
    if (parsed.exp < Math.floor(Date.now() / 1000)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export const cookieMaxAge = MAX_AGE_SECONDS;
