var fs = require('fs');
var timestamp = function() { 
  return new Date().toString(); 
}

var contents;

fs.writeFile('date.txt', contents, timestamp);

fs.readFile('date.txt', function (err, data) {
    if (err) throw err;
    contents = data;                           // 3
});

console.log('Comparing the contents');         // 1
console.assert(timestamp == contents);         // 2 - FAIL!
