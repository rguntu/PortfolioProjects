const {EventEmitter} = require('events')


const events = new EventEmitter()
events.on('bbb', (data, d) => {
    console.log(data, d)
})

events.emit('bbb', 'name', 14)



