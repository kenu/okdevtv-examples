var XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
var worksheet = workbook.Sheets['Sheet1'];
console.log(XLSX.utils.sheet_to_json(worksheet));
/* DO SOMETHING WITH workbook HERE */