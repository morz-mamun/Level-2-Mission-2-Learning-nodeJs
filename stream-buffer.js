// create a server by raw node js ->

// stream -> onk boro data k choto choto bhage bhag kore dei.

// buffer -> onk golo choto choto data niye ekti buffer create hoi

const http = require("http");
const fs = require("fs");

const server = http.createServer();

// server listening
server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET") {
    const readableStream = fs.createReadStream("./texts/read.txt");

    readableStream.on("data", (buffer) => {
      res.write(buffer);
    });

    readableStream.on("end", () => {
      res.end("First raw node js server in running.");
    });
  }
});

// run sever
server.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
