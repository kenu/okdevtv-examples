'use strict';

var db = require('./db');

function showResult(t) {
    console.log(t);
}

function testProm(name) {
    var connection = db.connection();
    connection.connect();
    var result;
    var p1 = new Promise(function (resolve, rejected) {
        connection.query('SELECT * FROM user where name = ?', [name], function (err, rows, fields) {
            if (err) throw err;
            var seq = rows[0].seq;
            result = {
                data: rows
            };
            resolve(seq);
            console.log(seq);
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
}
testProm('kenu1');
