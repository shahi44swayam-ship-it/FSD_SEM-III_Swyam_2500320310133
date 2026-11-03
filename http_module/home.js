const home = require('./home.js');
const index = require('./index.html');
require('http').createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(home);
    } else if (req.url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(index);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});