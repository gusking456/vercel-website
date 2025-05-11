import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Maintenance Mode (query param)
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
          <h1>SITE UNDER MAINTENANCE</h1>
          <p>We're working on improvements. Please check back later.</p>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' },
      status: 200
    });
  }

  // 2. Welcome Banner for First-Time Visitors (cookie check)
  const hasVisited = request.cookies.get('visited')?.value === 'true';
  if (!hasVisited && pathname === '/') {
    return new Response(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Welcome</title>
          <meta http-equiv="Set-Cookie" content="visited=true; Path=/; Max-Age=3600">
          <style>
            body {
              margin: 0;
              padding: 2rem;
              background: #f8f8f8;
              font-family: sans-serif;
              text-align: center;
            }
            .banner {
              background: #0070f3;
              color: white;
              padding: 1rem;
              font-size: 1.5rem;
              border-radius: 6px;
              margin-top: 4rem;
            }
          </style>
        </head>
        <body>
          <div class="banner">👋 Welcome to the Strata Portal! This message won’t show again.</div>
        </body>
      </html>
    `, {
      headers: {
        'Content-Type': 'text/html',
        'Set-Cookie': 'visited=true; Path=/; Max-Age=3600'
      },
      status: 200
    });
  }

  return NextResponse.next();
}
