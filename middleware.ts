import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { LOCAL_STORAGE_KEYS } from '@/constants/common/store-keys';
import { serverCookies } from '@/lib/server-cookies';
import { validateSession } from '@/service/auth';

const { TOKEN } = LOCAL_STORAGE_KEYS;

export async function middleware(request: NextRequest) {
  const token = await serverCookies.get(TOKEN);

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const session = await validateSession(token);
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.next();
  }

  if (
    !session &&
    !pathname.startsWith('/login') &&
    !pathname.startsWith('/register')
  ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (
    session &&
    (pathname.startsWith('/login') || pathname.startsWith('/register'))
  ) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
