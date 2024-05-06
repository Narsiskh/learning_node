let url = 'http://mylogger.io/log';

module.exports.log = function log(message) {
    // Send an HTTP request
    console.log(message);
}