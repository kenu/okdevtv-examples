const async = require('async');

function callback(e) {
    console.log(e);
}
async.series([
    function(callback) { callback(1); },
    function(callback) { callback(2); }
]);
