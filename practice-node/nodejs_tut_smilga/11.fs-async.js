const {readFile, writeFile} = require('fs');
readFile('./content/test.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    const first = result;
    readFile('./content/test2.txt', (err, result) => {
        if(err) {
            console.log(err)
            return;
        }
     const second = (result)

     writeFile('./content/result2.txt', 
        `Here is the result - ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log(err)
                return;
            }
            console.log(result)
        })

    })

   
})