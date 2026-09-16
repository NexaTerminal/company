import { NextResponse, type NextRequest } from 'next/server';
import { ADMIN_COOKIE, cookieMaxAge, signSession } from '@/lib/admin/session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// In-memory rate limiter (best-effort; resets on cold start).
const attempts = new Map<string, { count: number; firstAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now - rec.firstAt > WINDOW_MS) {
    attempts.set(ip, { count: 1, firstAt: now });
    return true;
  }
  rec.count += 1;
  return rec.count <= MAX_ATTEMPTS;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many attempts. Try again later.' }, { status: 429 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { username, password } = body ?? {};
  const expectedUser = process.env.ADMIN_USER;
  const expectedPass = process.env.ADMIN_PASSWORD;

  if (!expectedUser || !expectedPass) {
    return NextResponse.json({ error: 'Admin is not configured on the server.' }, { status: 500 });
  }
  if (typeof username !== 'string' || typeof password !== 'string') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  if (username !== expectedUser || password !== expectedPass) {
    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
  }

  const token = await signSession(username);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: cookieMaxAge,
  });
  return res;
}
