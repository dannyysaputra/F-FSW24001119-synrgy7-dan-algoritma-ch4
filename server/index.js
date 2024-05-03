const http = require('http');
const fs = require('fs');
const path = require('path');

const { PORT = 3000 } = process.env;
const PUBLIC_DIRECTORY = path.join(__dirname, '..', 'public');

const contentTypesByExtension = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript'
};

function serveFile(filePath, res) {
    const extname = path.extname(filePath).slice(1);
    const contentType = contentTypesByExtension[extname] || 'text/plain';
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end('500 Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}

const routes = {
    '/': 'index.html',
    '/cari-mobil': 'cari-mobil.html',
};

function onRequest(req, res) {
    let url = req.url;

    const filePath = path.join(PUBLIC_DIRECTORY, routes[url] || url.substring(1));
    serveFile(filePath, res);
}

const server = http.createServer(onRequest);

server.listen(PORT, 'localhost', () => {
    console.log("Running server on http://localhost:%d", PORT );
});
