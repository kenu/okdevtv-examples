var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express 1' });
});

router.get('/excel', function (req, res, next) {
  var XLSX = require('xlsx');
  var workbook = XLSX.readFile('test.xlsx');
  var worksheet = workbook.Sheets['Sheet1'];
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(XLSX.utils.sheet_to_json(worksheet)));
});


router.get('/download', function (req, res, next) {
  var XLSX = require('xlsx');
  var workbook = XLSX.readFile('test.xlsx');
  var worksheet = workbook.Sheets['Sheet1'];
  const stream = Buffer(XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' }));
  res.setHeader('Content-disposition', 'attachment; filename=jsonFile.xlsx');
  res.send(stream);
});


module.exports = router;
