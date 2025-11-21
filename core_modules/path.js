const path = require("path");
const myPath = "C:/Users/Talha/Desktop/mern_practice_lws/core_modules/index.js";
console.log(path.basename(myPath));
console.log(path.delimiter);
console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.format(pathObject));
// console.log(path.matchesGlob(path, pattern));
console.log(path.isAbsolute(myPath));
// path.join([...paths])
// path.normalize(path)
console.log(path.parse(myPath));
// path.posix
// path.relative(from, to)
// path.resolve([...paths])
// path.sep
// path.toNamespacedPath(path)
// path.win32
