var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'devuser',
    password: 'devpass',
    database: 'devdb'
});

connection.connect();

connection.query('SELECT * from user', function (err, rows, fields) {
    if (err) throw err;

    console.log('result is: ', rows[0]);
});

connection.end();