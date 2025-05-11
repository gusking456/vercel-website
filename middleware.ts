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
