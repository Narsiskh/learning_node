const fs = require('fs');

// Hear, all the asynchronous methods take a function as their last argument. Node will call this function when that asynchronous operation completes. We call this function a Callback.
fs.readdir('./' , (err, files) => {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})
// Result [
//   '.git',            '.gitignore',
//   '.idea',           'FileSystem.js',
//   'GlobalObject.js', 'LICENSE',
//   'README.md',       'app.js',
//   'logger.js',       'main.js',
//   'modules.js',      'node_modules',
//   'os.js',           'package.json',
//   'path.js',         'pnpm-lock.yaml'
// ]