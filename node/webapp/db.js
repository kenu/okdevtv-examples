var mysql = require('mysql');
exports.connection = function () {
    var connection =  mysql.createConnection({
        host: 'localhost',
        user: 'devuser',
        password: 'okpassokpass',
        database: 'okdevdb'
    });

    return connection;
}
