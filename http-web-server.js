const http = require("http");

// const server = http.createServer(function server(req, res) {
//     res.end('All Done and server challing')
// }).listen(3000)

// console.log(server);
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "test/plain",
  });
  res.end(JSON.stringify({
    name: "hello! Sir Newton is your friend!",
    age: '23'
  }));
});

server.listen(PORT, () => {
  console.log(`Listing server on ${PORT}`);
}); //127.0.0.1 => localost
