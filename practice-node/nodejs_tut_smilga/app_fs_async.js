const {readFile, writeFile} = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err) {
//                 reject(err)
//             } else {

//                 resolve(data)
//             }
//         })
//     })

   
// }

// getText('./content/test.txt').then(result => console.log(result))
// .catch(err => console.log(err))

const start = async () => {
    try {

        // const first = await getText('./content/test.txt')
        // const second = await getText('./content/test2.txt')
        const first = await readFile('./content/test.txt', 'utf-8')
        const second = await readFile('./content/test2.txt', 'utf-8')
        await writeFile('./content/newWriteFile.txt', `This is awesome: ${first} ${second}`)
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
    

}

start()