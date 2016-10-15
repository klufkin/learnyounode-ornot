const net = require('net'); // use to create our TCP serverData
const strftime = require('strftime'); // tool to format time


const server = net.createServer(function(socket) {
    socket.end(strftime('%F %H:%M', new Date()) + '\n');
});


// listen to provided port from commandline
server.listen(process.argv[2]);
