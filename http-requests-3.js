var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      var allData = data;
      console.log(allData);
    });

    response.on('end', function(){
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTML ( {host: 'sytantris.github.io', path: '/http-examples/step3.html'} );