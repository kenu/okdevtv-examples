var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var dao = require('./common_dao');

/* GET member listing. */
router.get('/', count);
router.get('/list', list);

async function count(req, res, next) {
    var cnt = await getTotalCount();
    res.end(JSON.stringify(cnt[0]));
}
async function getTotalCount() {
    var sql = "select count(*) as cnt from TB_log";
    return await dao.query(sql);
}

async function list(req, res, next) {
    var id = req.query.id || '';
    var start = req.query.s || '';
    var end = req.query.e || '';
    var page = parseInt(req.query.p);
    page = (isNaN(page) || page < 1) ? 1 : page;

    var where = '';
    var params = [];
    var size = 20;
    var startNo = (page - 1) * size;

    if (m_id || start || end) {
        end = (end) ? end : '9999-12-31';
        where = `where 1 = 1 and m_id like ? and entryDate >= ? and entryDate <= ?`;
        params = [m_id + '%', start, end, startNo, size];
    } else {
        params = [startNo, size];
    }

    var sql = `select * from TB_adminlog 
    ${where} 
    order by idx desc limit ?, ?`;

    var data = await dao.query(sql, params);
    var hits = await dao.query(`select count(*) as hits from TB_log ${where}`, params);
    var total = await getTotalCount();
    var result = {total: total[0].cnt, hits: hits[0].hits, page: page, data: data};
    res.end(JSON.stringify(result));
}

module.exports = router;
