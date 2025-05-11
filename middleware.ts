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
  
// 2. Welcome Screen
  const hasDismissed = request.cookies.get('visited')?.value === 'true';

if (!hasDismissed && pathname === '/') {
  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Welcome</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          .banner {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #0070f3;
            color: white;
            padding: 1rem;
            font-size: 1rem;
            text-align: center;
            z-index: 9999;
          }
          .banner button {
            background: none;
            border: 1px solid white;
            color: white;
            margin-left: 1rem;
            padding: 0.3rem 0.6rem;
            cursor: pointer;
          }
          iframe {
            border: none;
            width: 100%;
            height: calc(100vh - 50px);
            margin-top: 50px;
          }
        </style>
      </head>
      <body>
        <div class="banner">
          Welcome to the Strata Portal!
          <button onclick="dismiss()">Dismiss</button>
        </div>
        <iframe src="/" id="main"></iframe>
        <script>
          function dismiss() {
            document.cookie = "visited=true; path=/; max-age=86400";
            location.reload();
          }
        </script>
      </body>
    </html>
  `, {
    headers: {
      'Content-Type': 'text/html'
    },
    status: 200
  });
}


  return NextResponse.next();
}

// 3. Geo blocking by country with testable query param override
const blockedCountries = ['CN', 'RU', 'KP']; // Blocked countries list

// Use geo.country if available, otherwise use a ?country= override for testing
const country =
  request.geo?.country ||
  request.nextUrl.searchParams.get('country')?.toUpperCase();

if (country && blockedCountries.includes(country)) {
  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Access Restricted</title>
        <style>
          body {
            background: #1a1a1a;
            color: #fff;
            font-family: sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
            flex-direction: column;
          }
          h1 {
            font-size: 2.5rem;
            color: #e74c3c;
          }
          p {
            max-width: 400px;
          }
        </style>
      </head>
      <body>
        <h1>Access Restricted</h1>
        <p>We're currently not allowing access from your region (${country}).</p>
      </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' },
    status: 403
  });
}
