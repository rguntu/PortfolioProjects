//const fs = require('fs').promises
const fs = require('fs')
const path = require('path')


// const start = async () => {
//     await fs.writeFile('test.txt', "ok")
//     console.log(await fs.readFile('test.txt', 'utf-8'))
// }

// start()

const p1 = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('test2.txt', 'ok', (error, data) => {
            if(error) {
                reject('rejected')
            }
            resolve('resolved')
        })
    })
}
p1().then(p => {
    console.log(p)
})
.catch(error => {
    console.log(error)
})