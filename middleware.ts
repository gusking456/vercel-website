import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isMaintenance = request.nextUrl.searchParams.get('maintenance') === 'true';

  if (isMaintenance) {
    return new Response(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Maintenance Mode</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              background-color: #111;
              color: #fff;
              font-family: Arial, sans-serif;
              text-align: center;
            }
            h1 {
              font-size: 3rem;
              margin-bottom: 1rem;
              color: #ff4444;
            }
            p {
              font-size: 1.2rem;
              color: #ccc;
            }
          </style>
        </head>
        <body>
          <h1>🚧 SITE UNDER MAINTENANCE</h1>
          <p>We're working on improvements. Please check back later.</p>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' },
      status: 200
    });
  }

  return NextResponse.next();
}
