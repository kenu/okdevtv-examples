var db = require('./db');
var connection = db.connection();

connection.connect();

var query = connection.query(
    'UPDATE user SET name = ? WHERE id = ?', ['kenu.heo', 1],
    function (err, result) {
        console.log(result);
    });
connection.end();
