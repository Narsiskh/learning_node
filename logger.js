let url = 'https://mylogger.io/log';

/* Exporting Modules */
// To make functions, objects, or variables available for use in other files, you need to explicitly export them from the module file. This is typically done using the module.exports or exports object. For example:
module.exports.log = function log(message) {
    // Send an HTTP request
    console.log(message);
}

// module.exports = log; // We want export just a single function. So the `logger` in modules.js is no longer an object, it is a function that we can call directly
