var fs = require('fs'); // require file system

// read argument passed by commandline, convert buffer to utf8 string, then run callback
fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) console.log(err);
    else {
        data = data.split('\n');
        data.pop();
        console.log(data);
    }
});
