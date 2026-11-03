const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./config.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Error reading config file');
      return;
    }

    const config = JSON.parse(data);

    console.log(config.mongodb);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from the server!');
  });
});

server.listen(3000, () => {
  console.log('hi');
});