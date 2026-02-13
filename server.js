const http = require('http');

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

    if (req.method === 'POST' && req.url === '/proxy') {
        try {
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

                    const headers = {
                        'Content-Type': 'application/json'
                    };
                    if (apiKey) {
                        headers['Authorization'] = `Bearer ${apiKey}`;
                    }

                    const apiResponse = await fetch(endpoint, {
                        method: 'POST',
                        headers,
                        body: JSON.stringify(apiBody)
                    });

                    const responseData = await apiResponse.text();
                    const statusCode = apiResponse.status;

                    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
                    res.end(responseData);

                } catch (error) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: error.message }));
                }
            });
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Proxy server running at http://${HOST}:${PORT}`);
    console.log('This proxy will forward requests to any LLM API endpoint.');
    console.log('Configure this URL in Hey Leo! settings.');
});