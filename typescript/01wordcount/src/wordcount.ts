var fs = require('fs');

var content;
fs.readFile('./file.txt', function read(err: any, data: any) {
    if (err) {
        throw err;
    }
    content = data;
    printContent(content);
});

function printContent(content: any) {
    console.log(content.toString());
}
