module.exports = function getHTML (options, callback) {

  var https = require('https');

  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data', callback)             //can use anonymous function like the previous one too

    response.on('end', function(){
      console.log('Response stream complete.');
    });

  });

}
