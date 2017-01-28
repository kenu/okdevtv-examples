const async = require('async');
const db = require('./db');

var connection = db.connection();
connection.connect();

connection.query('SELECT * FROM user where name like ?', ['kenu%'], function (err, rows, fields) {
    var result = [];
    // arg1 now equals 'one' and arg2 now equals 'two'
    async.forEachOfSeries(rows, function (row, key, callback) {
        connection.query('SELECT * FROM article where user_seq = ?', [row.seq], function (err, rows2, fields) {
            result.push({
                user: row,
                articles: rows2
            });
            callback();
        });
    }, function (err) {
        console.log(result);
        connection.end();
    });
});
