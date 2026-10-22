import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'outsourcedlabor.com';

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase();
  const forwardedProtocol = (request.headers.get('x-forwarded-proto') || '').split(',')[0].trim().toLowerCase();
  const cloudflareVisitor = request.headers.get('cf-visitor') || '';
  const cloudflareProtocol = /"scheme"\s*:\s*"(https?)"/i.exec(cloudflareVisitor)?.[1]?.toLowerCase();
  const protocol = cloudflareProtocol || forwardedProtocol || request.nextUrl.protocol.replace(':', '');

  if (host === `www.${CANONICAL_HOST}` || protocol === 'http') {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.hostname = CANONICAL_HOST;
    destination.port = '';
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
