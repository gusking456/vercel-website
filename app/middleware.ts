import { NextRequest, NextResponse } from 'next/server';

// Function 1: Redirect residents to their building page from "/"
function redirectToBuilding(request: NextRequest): NextResponse | null {
  const unitId = request.cookies.get('unit-id')?.value;
  const isHomePage = request.nextUrl.pathname === '/';

  if (unitId && isHomePage) {
    return NextResponse.redirect(new URL(`/building/${unitId}`, request.url));
  }

  return null;
}

// Function 2: Block access to /documents for non residents
function protectDocuments(request: NextRequest): NextResponse | null {
  const role = request.cookies.get('role')?.value;
  const isProtectedPath = request.nextUrl.pathname.startsWith('/documents');

  if (isProtectedPath && role !== 'resident') {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return null;
}

// Function 3: Add maintenance mode header for all responses
function addMaintenanceHeader(response: NextResponse): void {
  response.headers.set('X-Site-Status', 'Maintenance-Mode: Off');
}

// Main middleware entry
export function middleware(request: NextRequest) {
  // Run redirection logic
  const redirect = redirectToBuilding(request);
  if (redirect) return redirect;

  // Run protection logic
  const block = protectDocuments(request);
  if (block) return block;

  // Continue with response and modify headers
  const response = NextResponse.next();
  addMaintenanceHeader(response);

  return response;
}
