const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber % 2 === 0) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Successful request ${randomNumber}`);
  } else {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Bad request ${randomNumber}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
