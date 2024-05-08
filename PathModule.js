const path = require('path')

const pathObj = path.parse(__filename);

console.log(pathObj);
// {
//   root: '/',
//   dir: '/home/narsis/Project/learning_node',
//   base: 'PathModule.js',
//   ext: '.js',
//   name: 'PathModule'
// }


