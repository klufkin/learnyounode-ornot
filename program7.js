// This node code emulates the curl command in terminal
var http = require('http');

url = process.argv[2];

http.get(url, function callback(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        console.log(data);
    })
    response.on('error', console.error);
}).on('error', console.error);
