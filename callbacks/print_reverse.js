var getHTML = require('../http-requests-5');

function printReverse (html) {
 var htmlReverse = html.split('').reverse().join('');
  console.log(htmlReverse);
}


getHTML({host: 'sytantris.github.io', path: '/http-examples/step6/reverse.html'} , printReverse);