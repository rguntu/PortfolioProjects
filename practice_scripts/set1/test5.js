// const fArray = [
//     function add(a,b) {
//         return a+b
//     },
//     function sub(a,b) {
//         return a-b
//     },
    
// ]
// fArray.map(fn => {
//     console.log(fn(3,2))
// })

const p1 = param1 => {
    return new Promise((resolve, reject) => {
        if(param1 === "ok1") {
            resolve("ok1")
        } else {
            reject("ok1 error")
        }
    })
}

const p2 = param2 => {
    return new Promise((resolve, reject) => {
        if(param2 === "ok2") {
            resolve("ok2")
        } else {
            reject("ok2 error")
        }
    })
}

const promiseMainAsync = async () => {
    try {
        console.log(await p1("ok1"))
        console.log(await p2("ok1"))
    } catch(err) {
        console.log(err)
    }
}
promiseMainAsync()
const promiseMain = () => {
    p1("ok1")
    .then(data => {
        console.log(data)
        return p2("ok1")
    })
    .then((data) => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    }) 
    // .then((data) => {
    //     console.log(data)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
}

//promiseMain()