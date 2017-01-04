'use strict';

function showResult(t) {
    console.log(t);
}
function testProm() {
    var result;
    var p1 = new Promise(function (resolve, rejected) {
        var seq = 123;
        result = {user: seq};
        resolve(seq);
    });
    p1.then(function (val) {
            var t = 3 * (val);
            result.answer = t;
            showResult(result);
        })
        .catch(function (e) {
            console.log(e);
        });
}
testProm();
