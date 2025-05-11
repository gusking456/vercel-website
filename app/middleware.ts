import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const unitId = request.cookies.get('unit-id')?.value;

  if (unitId && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/building/${unitId}`, request.url));
  }

  return NextResponse.next();
}
