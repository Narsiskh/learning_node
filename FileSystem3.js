const fs = require('fs');

fs.readdir('$' , (err, files) => {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})
// Error [Error: ENOENT: no such file or directory, scandir '$'] {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'scandir',
//   path: '$'
// }