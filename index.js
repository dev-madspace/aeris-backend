// index.js

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: "Hey brooo!" }));
});

const PORT = 3000;
const HOST = '0.0.0.0'; // 👈 This makes it listen on all IPs (public + local)

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});