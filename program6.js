var hasExt = require('./program6-mod');

var folder = process.argv[2]
var ext = process.argv[3]

hasExt(folder, ext, function(err, list) {
    if (err) return console.error(err);

    list.forEach(function(file) {
        console.log(file);
    });
});
