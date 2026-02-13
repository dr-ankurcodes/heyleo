const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
  // --- CORS headers ---
  const allowedOrigins = ['*'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'false');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // --- Proxy endpoint ---
  if (req.method === 'POST' && req.url === '/proxy') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const requestData = JSON.parse(body);
        const { endpoint, apiKey, body: apiBody } = requestData;

        if (!endpoint) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing endpoint' }));
          return;
        }

        const headers = { 'Content-Type': 'application/json' };
        if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`;

        const apiResponse = await fetch(endpoint, {
          method: 'POST',
          headers,
          body: JSON.stringify(apiBody)
        });

        const responseData = await apiResponse.text();
        res.writeHead(apiResponse.status, { 'Content-Type': 'application/json' });
        res.end(responseData);

      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
    return;
  }

  // --- Static file serving ---
  let filePath;
  if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html');
  } else {
    filePath = path.join(__dirname, 'public', req.url);
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // --- Fallback: serve index.html for unknown routes ---
      const fallbackPath = path.join(__dirname, 'index.html');
      fs.readFile(fallbackPath, (fallbackErr, fallbackData) => {
        if (fallbackErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(fallbackData);
        }
      });
    } else {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.ico': 'image/x-icon'
      }[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
  console.log('Serving index.html, static assets, proxy endpoint, and fallback routes.');
});
