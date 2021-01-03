function sayHello(name){
    console.log('Hello ' + name);
    }

sayHello('Shikhar');
//console.log(window)
//window is only available in browser
// not in node
console.log(); //global
var sayHello = function(){
    console.log(module);
}
sayHello();
const logger = require('./logger.js') // arguement is supposed to be the path of the required file/code

console.log(logger.url)
logger.log('');
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(totalMemory , freeMemory);
//ECMAScript 6
console.log(`Total Memory : ${totalMemory}`)
console.log(`Free Memory : ${freeMemory}`)

// but in node window is replaced by global(not sure though)