var getHTML = require('../http-requests-5');

function printLowerCase (html) {
  var htmlLowerCase =  html.toLowerCase();
  console.log(htmlLowerCase);
}


getHTML({host: 'sytantris.github.io', path: '/http-examples/step6/lowercase.html'} , printLowerCase);