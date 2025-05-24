//streams

const {writeFileSync} = require('fs')

for(let i=0; i<1000; i++) {
    writeFileSync('./content/file4.txt', `blah ${i} \n`, {flag: 'a'} )
}



