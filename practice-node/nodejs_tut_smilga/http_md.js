const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Hola')
    console.log(req)
    if(req.url === '/') {
        res.end('Welcome to HomePage')
    }
    
    res.end(`<h1>Oops</h1>
        <a href="/">BackHome</a>`)
})

server.listen(5001)



