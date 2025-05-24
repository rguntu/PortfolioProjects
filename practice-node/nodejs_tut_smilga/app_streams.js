const {createReadStream} = require('fs')

const stream = createReadStream('./content/file4.txt', {highWaterMark:90000
    ,encoding: 'utf-8'
})
//64KB
stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => console.log(err))


