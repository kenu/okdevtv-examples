var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'devuser',
    password: 'okpassokpass',
    database: 'okdevdb'
});
connection.connect();

connection.query('SELECT * FROM user', function (err, rows, fields) {
    if (err) throw err;

    console.log('The user is: ', rows[0]);
    for (idx in rows) {
        console.log(rows[idx]);
    }

});

connection.end();