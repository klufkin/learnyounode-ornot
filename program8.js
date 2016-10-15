// This node code emulates the curl command in terminal
var http = require('http');

// grabs url provided by commandline
var url = process.argv[2];

http.get(url, function callback(response) {
    response.setEncoding('utf8'); // turns the data from buffer objects to strings
    var serverData = []; // used to store the data served
    // calls each time data is sent
    response.on('data', function(data) {
        serverData.push(data);
    })

    // calls at end of server response
    response.on('end', function() {
        serverData = serverData.join('');
        console.log(serverData.length); // character length
        console.log(serverData); // compiled string of data served
    })
    response.on('error', console.error);
}).on('error', console.error);
