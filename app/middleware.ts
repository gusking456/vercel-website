import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isMaintenance = request.nextUrl.searchParams.get('maintenance') === 'true';

  if (isMaintenance) {
    const maintenancePage = new Response(`
      <html>
        <head><title>Maintenance Mode</title></head>
        <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">
          <h1>🚧 This site is under maintenance</h1>
          <p>Please check back later.</p>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' },
      status: 200
    });

    return maintenancePage;
  }

  return NextResponse.next();
}
