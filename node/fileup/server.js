// code from https://github.com/codeforgeek/File-upload-in-Node/
// Tutorial link : http://wp.me/p4ISPV-cq
var express = require('express');
var multer = require('multer');
var app = express();
var done = false;

app.use(multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
        return Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
        done = true;
    }
}));

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.post('/api/photo', function (req, res) {
    if (done == true) {
        console.log(req.files);
        res.end("File uploaded.\n" + JSON.stringify(req.files));
    }
});

app.post('/api/excel', function (req, res) {
    if (done == true) {
        console.log(req.files);
        res.end("Excel File uploaded.\n" + JSON.stringify(req.files));
    }
});

app.listen(3000, function () {
    console.log("Working on port 3000");
});
