var fs = require('fs')
var path = require('path') // use path to perform path operations

// creating list of files with given extension name
function hasExt(dirName, extName, callback) {

    fs.readdir(dirName, function(err, files) {
        if (err) {
            return callback(err);
        }
        // iterates through array and checks extension name
        files = files.filter(function(file) {
            return path.extname(file) === '.' + extName;
        });

        callback(err, files);
    })
}

module.exports = hasExt;
