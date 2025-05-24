const EventEmitter = require('events')

const customEmitter = new EventEmitter()




customEmitter.on('response', (name, id) => {
    console.log(`data recvd ${name} ${id}`)
})

customEmitter.on('response', () => {
    console.log(`data recvd some`)
})

customEmitter.emit('response', 'john', 34)