// (function (exports, require, module, __filename, __dirname) {})

// console.log(__filename); // /home/narsis/Project/learning_node/logger.js
// console.log(__dirname); // /home/narsis/Project/learning_node

const EventEmitter = require('events')

// let x =; // SyntaxError: Unexpected token ';'
let url = 'https://mylogger.io/log';

// We want this Logger class to have all the capabilities of this event emitter. The way we dp that is by using the `extends` keyword. Then we add the name of parent or the base class. With this simple change this Logger class will have all the functionality that is defined in EventEmitter.
class Logger extends EventEmitter {
    /* Exporting Modules */
// To make functions, objects, or variables available for use in other files, you need to explicitly export them from the module file. This is typically done using the module.exports or exports object. For example:
// When a function is inside a class, we say that is a method in that class
    log(message) {
        // Send an HTTP request
        console.log(message);

        /* Raise an event */
        //emitter.emit('messageLogged', {id: 1, url: 'https://'})
        // Now instead of using this `emitter` object, we are going to use `this`. So, in this class we can directly emit or raise events
        this.emit('messageLogged', {id: 1, url: 'https://'})
    }

}


module.exports = Logger  // We want export just a single function. So the `logger` in modules.js is no longer an object, it is a function that we can call directly

// module.exports.log = log
// exports.log = log;
