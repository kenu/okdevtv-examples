var express = require('express');
var router = express.Router();
var multer = require('multer');
var XLSX = require('xlsx');

const upload = multer({
  dest: './uploads/',
  rename: function (fieldname, filename) {
    return Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
    done = true;
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/api/excel')
      .post(upload.single('userExcel'), function (req, res) {
  var path = req.file.path;
  var base = __dirname.split('/');
  base.pop();
  var filepath = base.join('/') + '/' + path;
  var workbook = XLSX.readFile(filepath);
  var sheetNames = workbook.SheetNames;
  var worksheet = workbook.Sheets[sheetNames[0]];
  res.json(XLSX.utils.sheet_to_json(worksheet));
});

module.exports = router;
