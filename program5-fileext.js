var fs = require('fs'); // require file system

// read argument passed by commandline, convert buffer to utf8 string, then run callback
fs.readdir(process.argv[2], function(err, list) {
    if (err) console.log(err);
    else {
        for (let i = 0; i < list.length; i++) {
            let split = list[i].split('.');
            if (split[1] == process.argv[3]) console.log(list[i]);
        }
    }
});
