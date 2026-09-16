import { NextResponse, type NextRequest } from 'next/server';
import { ADMIN_COOKIE, verifySession } from '@/lib/admin/session';

// Gate the admin area and its API. The login page and login endpoint are public.
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isLoginPage = pathname === '/admin/login';
  const isLoginApi = pathname === '/api/admin/login';
  if (isLoginPage || isLoginApi) return NextResponse.next();

  const token = req.cookies.get(ADMIN_COOKIE)?.value;
  const session = await verifySession(token);

  if (session) return NextResponse.next();

  if (pathname.startsWith('/api/admin')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = req.nextUrl.clone();
  url.pathname = '/admin/login';
  url.searchParams.set('next', pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
