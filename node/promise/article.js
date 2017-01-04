var db = require('./db');
var connection = db.connection();

connection.connect();

connection.query('SELECT * FROM user where name = ?', ['kenu1'], function (err, rows, fields) {
    if (err) throw err;
    var seq = rows[0].seq;

    connection.query('SELECT * FROM article where user_seq = ?', [seq], function (err, rows2, fields) {
        if (err) throw err;
        console.log(rows);
        console.log(rows2);
        connection.end();
    });
});
