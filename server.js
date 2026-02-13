const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
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

    // Serve index.html at root
    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
        return;
    }

    // Proxy endpoint
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

    // Fallback for unknown routes
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, HOST, () => {
    console.log(`Proxy + static server running at http://${HOST}:${PORT}`);
});
