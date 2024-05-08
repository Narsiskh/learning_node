const os = require("os");

let totalMemory = os.totalmem() // Returns the total amount of system memory in bytes as an integer.
let freeMemory= os.freemem() // Returns the amount of free system memory in bytes as an integer.

// Template string
// ES6 : ECMAScript 6
console.log(`Total Memory: ${totalMemory}`); // Total Memory: 8090804224

console.log(`Free Memory: ${freeMemory}`); // Free Memory: 1879117824








