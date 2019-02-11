var getHTML = require('../http-requests-5');

function printUpperCase (html) {
  var htmlUpperCase =  html.toUpperCase();
  console.log(htmlUpperCase);
}


getHTML({host: 'sytantris.github.io', path: '/http-examples/step6/lowercase.html'} , printUpperCase);