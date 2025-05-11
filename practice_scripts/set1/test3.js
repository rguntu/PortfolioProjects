
const fs = require('fs')
function readFileAsync(f1) {
    return new Promise((resolve, reject) => {
        fs.readFile(f1, 'utf-8', (data, err) => {
            if(err) reject('error')
            resolve(data)
        })
    })
}

readFileAsync("file1").then(data => console.log(data)).catch(error => console.log(error))

function onceF(...args) {
    console.log(`onceF${args.join(':')}`)
}

function onlyOnce(fn) {
    let once = false;
    return function(...args) {
        if(!once) {
            fn(...args)
            once = true;
        }
    }
    
}

const fn = onlyOnce(onceF)
//fn("blah","blah2")
fn("blah","blah2")