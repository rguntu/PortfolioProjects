function closure() {
    let counter=0;
    return function inner() {
        console.log(counter++)
    }
}

const fn = closure()
fn()
fn()
fn()

// const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.emit('data', 'hello')

// emitter.on('data', msg => {
//     console.log('rcvd', msg)
// })

// app.get('/posts', async(req,res) => {
//     try {
//         const resp = await fetch('url')
//     if(!resp.ok) {
//         throw new Error("API failure")
//     }
//     const data = await resp.json()
//     resp.json(data)

//     } catch(error) {
//         res.status(500).json({error: error.message})
//     }
    

// })

// function async fetchWithRetry(url, retry, delay) {
//     for(let i=0; i<retry; i++) {
//         try {
//                 let resp = await fetch(url)
//                 if(!resp.ok) throw new Error('error')
//                 let data = await resp.json()
//                 return await data;

//         } catch(error) {
//             if(i == retry) 
//                 res.status(500).json({error: error.message})
//            await new Promise((res)=> setTimeout(res, delay))
//         }
//     }
// }