const http = require("http");

// const server = http.createServer(function server(req, res) {
//     res.end('All Done and server challing')
// }).listen(3000)

// console.log(server);
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/friends") {
    // res.writeHead(200, {
    //   "Content-Type": "test/plain",
    // });
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(
      JSON.stringify({
        name: "hello! Sir Newton is your friend!",
        age: "23",
      })
    );
  } else if (req.url === "/messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");

    res.write("<li> Hello Newton<li/>");
    res.write("<li> what are your thoughts on astronomy?<li/>");

    res.write("<ul>");
    res.write("<ul/>");
    res.write("<body/>");
    res.write("<html/>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listing server on ${PORT}`);
}); //127.0.0.1 => localost
