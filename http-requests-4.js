var https = require('https');

function getHTML (options, callback) {

  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      var allData = data;
      callback(allData);
    });

    response.on('end', function(){
      console.log('Response stream complete.');
    });

  });

}

function printHTML (html) {
  console.log(html);
}

getHTML({host: 'sytantris.github.io', path: '/http-examples/step3.html'} , printHTML);