console.log(__filename);
console.log(__dirname);
const EventEmitter = require('events');
const emitter = new EventEmitter();
var url = 'https://mylogger.io/log';

function log(message){
   

    // Raise an event
    emitter.emit(message, { id: 1, url: 'url'});

}
module.exports.log = log;
module.exports.url = url;
//console.log(module);

