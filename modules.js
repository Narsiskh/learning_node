/* Here is our main module */
// console.log(module);
// Module {
//   id: '.',
//   path: '/home/narsis/Project/learning_node',
//   exports: {}, // Anything that we add to this object will be exported from this module, and it will be available outside of this module.
//   filename: '/home/narsis/Project/learning_node/modules.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/home/narsis/Project/learning_node/node_modules',
//     '/home/narsis/Project/node_modules',
//     '/home/narsis/node_modules',
//     '/home/node_modules',
//     '/node_modules'
//   ]
// }

/* Loading a Module */
// When you want to use code from another module in your file, you use the require function to import it. For example:

const logger = require('./logger')
// logger = 1 // TypeError: Assignment to constant variable.

// console.log(logger) // { log: [Function: log] }
logger.log('message') // message
// If it is a function:
// logger('message') // message