//Input: { a: 1, b: { c: 2 } }
const b = { a: 1, b: { c: 2 } };

function deepClone(b) {
    if(b === null || typeof b !== 'object') return b

    let ret = {}
    for(p in b) {
        if(b.hasOwnProperty(p)) {
            ret[p] = deepClone(b[p])
        }
    }
    return ret
}

console.log(deepClone(b))

// Input: [1, [2, [3, [4]], 5]]

// function flatIt(n, result) {
//     for(let val of n) {
        
//         if(Array.isArray(val)) {
//             flatIt(val, result)
//         } else {
//             result.push(val)
//         }
//     }

//     return result
// }

// // function flatIt(n, result = []) {
// //     for (let val of n) {
// //         if (Array.isArray(val)) {
// //             flatIt(val, result);
// //         } else {
// //             result.push(val);
// //         }
// //     }
// //     return result;
// // }
// const n = [1, [2, [3, [4]], 5]]
// console.log(flatIt(n, result=[]))

// function smartCalc(op, ...args) {
//     if(args.length === 0 ) return null;
//     if(op === 'function') {
//         return  args.reduce(op)
//     }

//     switch(op) {
//         case 'add':
//             return args.reduce((a,p) => {
//                 return a + p;
//             }, 0)
//         default:
//             throw new Error(`Operation not supportd:${op}`)
//     }
// }

//console.log(smartCalc('add', 2,3))
// const mult = (a,b) => a*b

// function f1(fn, ...n) {
//    return fn(...n)
// }


// function calc(op, ...n) {
//     let rt;
//     switch(op) {
//         case 'add' : 
//             rt = n.reduce((rd, k) => rd+k, 0)
//             break;
//     }
//     return rt;
// }

// console.log(calc('add', 1,2,3))


//group objects by key

// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 20 },
//     { name: "Carol", age: 30 }
//   ];

//   const pRet = people.reduce((acc,p) => {
//     acc[p.name] = acc[p.name] || []
//     acc[p.name].push(p)
//     return acc;
//   }, {})
//   console.log(pRet)

//   const ret = people.reduce((acc, o1) => {
//     acc[o1.age] = acc[o1.age] || []
//     acc[o1.age].push(o1)
//     return acc;
//   }, {})

//   console.log(ret)

//Given [1, [2, [3, 4], 5]], flatten it into [1, 2, 3, 4, 5].

// const arr =[7, [2, [3, 4], 5]]

// function flattenArr(arr, p = '', ret = []) {
//     for(const i of arr) {
//         if(Array.isArray(i)) {
//             flattenArr(i, p = '', ret) 
//         } else {
//             ret.push(i)
//         }
//     }
//     return ret
// }

//console.log(flattenArr(arr))
// const obj = { a: { b: 1 }, c: 2 };


// function flatObj(obj, prefix='', result = {}) {

//     for(let key in obj) {
//         const val = obj[key]
//         const nKey = prefix ? `${prefix}:${key}` : key

//         if(val !== null && typeof val === 'object' && !Array.isArray(val)) {
//             flatObj(val, nKey, result)
//         } else {
//             result[nKey] = val; 
//         }
        
//     }

//     return result;
    
// }

// console.log(flatObj(obj) )




















// const result = {}
// function flatten(obj, pKey, result) {
//    for(const key in obj) {
//     const val = obj[key]
//     const nKey = pKey ? `${pKey}.${key}` : key
//     if(typeof val  === 'object' && val !== null && !Array.isArray(val) ) {
//         flatten(val, nKey, result)
//     } else {
//         result[nKey] = val
//     }
//    }
// }
// flatten(obj, '', result) 
// console.log(result)

// const obj = { a: 1, b: null, c: 0, d: "hello", e: undefined };

// const bb = Object.fromEntries(Object.entries(obj).filter( ([_,v]) =>  Boolean(v)))
// console.log(bb)


// const arr = ["a", "b", "a", "c", "b", "a"];

// const freq = {}

// for(const c of arr) {
//     freq[c] = (freq[c] || 0) +1;
// }

// console.log(freq)