
// console.log("started first task")

// setTimeout(() => {
//     console.log("started second task")
// },0)
// console.log("started third task")

// console.log("started first task")
// setInterval(() => {
//     console.log("started second task")
// }, 2000)

// console.log("started third task")

const http = require('http')

const server = http.createServer((req,res) => {
    console.log("server created")
    res.end('Hola')
})
server.listen(5001, ()=> {
    console.log("server listen")
})

