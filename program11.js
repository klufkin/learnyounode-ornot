// dependencies
const http = require('http'); // use to create our http server
const fs = require('fs');

const server = http.createServer(function(request, response) {
    var readStream = fs.createReadStream(process.argv[3]); // pass path from command line, creates readable stream of file
    readStream.pipe(response); // passes the stream data to the response stream
});

server.listen(process.argv[2]); // listen to provided port from commandline
