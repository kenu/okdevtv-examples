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
        res.json(jsonData);

    });

    connection.end();

});

router.get('/articles', function (req, res, next) {
    var connection = db.connection();
    connection.connect();
    var result;
    var name = 'kenu1';
    var p1 = new Promise(function (resolve, rejected) {
        connection.query('SELECT * FROM user where name = ?', [name], function (err, rows, fields) {
            if (err) throw err;
            var seq = rows[0].seq;
            result = {
                user: rows[0]
            };
            resolve(seq);
        });
    });

    p1.then(function (seq) {
        console.log(seq);
        connection.query('SELECT * FROM article where user_seq = ?', [seq], function (err, rows2, fields) {
                if (err) throw err;
                result.articles = rows2;
                showResult(result);
                connection.end();
            })
            .catch(function (e) {
                console.log(e);
            });
    });

    function showResult(t) {
        res.json(t);
    }

});

module.exports = router;
