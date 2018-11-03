var async = true;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', async);
xhr.send();

setTimeout(function delayed() { // Creates race condition!
    function listener() {
        console.log('greetings from listener');
    }
    xhr.addEventListener('load', listener);
    xhr.addEventListener('error', listener);
}, process.argv[2]);
