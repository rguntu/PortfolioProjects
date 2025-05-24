const {readFile} = require('fs')

console.log("started first task")

const test = readFile('./content/test.txt', 'utf-8'
    , (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        console.log(result)
        console.log("first task done")
    })

console.log("starting next task")
