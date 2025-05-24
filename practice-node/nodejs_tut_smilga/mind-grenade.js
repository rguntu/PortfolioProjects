const os = require('os')
const path = require('path')
const fPath = path.join('/content/', 'sfolder', 'test.txt')
console.log(fPath)
console.log(path.resolve(__dirname, 'content/', 'sfolder', 'test.txt'))
// console.log(os.userInfo())

// console.log(os.uptime())

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalmem: os.totalmem(),
//     amem: os.freemem()
// }

// console.log(currentOS)