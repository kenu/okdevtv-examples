var db = require('./db');
var connection = db.connection();

connection.connect();

var post = {
    name: 'kenu',
    email: 'kenu.heo@gmail.com',
    passwd: 'okpassokpass'
};
var query = connection.query('INSERT INTO user SET ?', post, function (err, result) {
    console.log(result);
});
connection.end();

console.log(query.sql);
