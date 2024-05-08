const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);
// [
//   '.git',            '.gitignore',
//   '.idea',           'FileSystem1.js',
//   'GlobalObject.js', 'LICENSE',
//   'README.md',       'app.js',
//   'logger.js',       'main.js',
//   'modules.js',      'node_modules',
//   'os.js',           'package.json',
//   'path.js',         'pnpm-lock.yaml'
// ]


