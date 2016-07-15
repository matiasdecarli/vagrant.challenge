var request = require('request');
var fs = require('fs');

var url = process.env.TARGET_URL;
var filename = process.env.OUTPUT_FILENAME;

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var content = new Date().getTime() + " | " + body;
    saveToFile(content);
  }
  else{
    var error = 'error fetching ' + url + ': ' + error.toString();
    saveToFile(error);
  }
})

function saveToFile(content){
  fs.writeFile(filename, content, function(err) {
    if(err) {
      return console.log('error saving file: ' + err);
    }
    console.log("output exported succesfully");
  });
}