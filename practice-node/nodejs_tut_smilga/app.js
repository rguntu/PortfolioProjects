const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => {
    console.log("server created")
    // const text = fs.readFileSync('./content/file4.txt', 'utf8')
    // res.end(text)
    const fStream = fs.createReadStream('./content/file4.txt','utf8')
    fStream.on('open', () => {
        fStream.pipe(res)
    })
    fStream.on('error', (err) => {
        res.end(err)
    })
})
server.listen(5001, ()=> {
    console.log("server listen")
})