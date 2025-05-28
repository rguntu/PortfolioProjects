const fs = require('fs')
const path = require('path')

// const data = fs.readFileSync('test.js', 'utf-8')
// console.log(data)

// fs.readFile('test.js', 'utf-8', (error, data) => {
//     if(error) {
//         console.log("Error:", error)
//     }
//     console.log(data)
// })
const dir = '/Users/guntupr1/pers/portfolio_projects/practice_scripts'
function listFiles(dir) {
    try {
        const files = fs.readdirSync(dir)
        files.forEach(f => {
            const fFile = path.join(dir,f)
            if(fs.statSync(fFile).isFile()) {
                console.log(fFile)
            } else {
                listFiles(fFile)
            }
        })

    } catch(error) {
        console.log(error)
    }
  
}
listFiles(dir)
