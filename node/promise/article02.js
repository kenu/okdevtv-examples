var db = require('./db');

function getInfo(name) {
    var connection = db.connection();
    connection.connect();
    connection.query('SELECT * FROM user where name = ?', [name], function (err, rows, fields) {
        if (err) throw err;
        var seq = rows[0].seq;

        connection.query('SELECT * FROM article where user_seq = ?', [seq], function (err, rows2, fields) {
            if (err) throw err;
            var result = {user: rows[0], articles: rows2};
            return result;
            connection.end();
        });
    });
}
getInfo('kenu1');
