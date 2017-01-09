var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'devuser',
    password: 'okpassokpass',
    database: 'okdevdb'
});

connection.connect();

connection.query('SELECT now() AS time', function (err, rows, fields) {
    if (err) throw err;

    console.log('The time is: ', rows[0].time);
});

connection.end();