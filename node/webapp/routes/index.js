var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function (req, res, next) {

    var connection = db.connection();
    connection.connect();

    connection.query('SELECT * FROM user', function (err, rows, fields) {
        if (err) throw err;

        var jsonData = {
            title: 'MariaDB',
            users: rows
        };
        res.render('index', jsonData);

    });

    connection.end();

});

module.exports = router;

