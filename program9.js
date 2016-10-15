// This node code emulates the curl command in terminal
var http = require('http');

var urls = []
    // grabs urls provided by commandline
for (let i = 2; i < process.argv.length; i++) {
    urls.push(process.argv[i]);
}

function getChain(index) {
    http.get(urls[index], function callback(response) {
        response.setEncoding('utf8'); // turns the data from buffer objects to strings
        var serverData = []; // used to store the data served
        // calls each time data is sent
        response.on('data', function(data) {
            serverData.push(data);
        })

        // calls at end of server response
        response.on('end', function() {
            serverData = serverData.join('');
            console.log(serverData); // compiled string of data served
            if (index < (urls.length - 1)) {
                getChain(++index);
            }
        })
        response.on('error', console.error);
    }).on('error', console.error);
}

getChain(0);
