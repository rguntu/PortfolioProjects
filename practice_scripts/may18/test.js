//console.log(flattenArr(arr))
const obj = { a: { b: 1 }, c: 2 };

function flat(obj, prefix='', rt={}) {
    for(k in obj) {
        let v = obj[k]
        const nKey = prefix ? prefix+':'+k : k
        if(typeof v === 'object' && v !== null) {
            flat(v, nKey, rt)
        } else {
            rt[nKey] = v;
        }
    }
    return rt;
}
console.log(flat(obj, prefix='', rt={}))
// function dClone(v1) {
//     if(v1 === null || typeof v1 !== 'object') return v1
//     let ret = {}
//     for(v in v1) {
//         if(v1.hasOwnProperty(v)) {
//             ret[v] = dClone(v)
//         }
//     }
//     return ret
// }

// const obj = {
//     name: "rave",
//     group: {
//         name: "gname1",
//     }
// }
// console.log(dClone(obj))

// function debounce(fn) {
//     let timer;
//     return function() {
//         clearTimeout(timer)
//         timer = setInterval((...args) => {
//             return fn.apply(this, args)
//         }, 1000)

//     }
// }

// function g1(arr) {
//     return arr.reduce((p,q) => p+q,0)
// }

// console.log(g1([1,2,3]))


// function isAnagram(str1, str2) {
//     // Your code here
//     let sortStr = str1 => str1.split('').sort().join();
//     return sortStr(str1) === sortStr(str2)
// }


// console.log(isAnagram("abc", "cba"))












//flatten([1, [2, [3, 4], 5]]) // [1, 2, 3, 4, 5]


// function sol(a) {
//     let r = []
//     for(let i in a) {
//             const v = a[i]
//             if(Array.isArray(v)) {
//                 r = r.concat(sol(v))
//             } else {
//                 r.push(v)
//             }
//     }
//     return r
// }

// let r = sol([1, [2, [3, 4], 5]])

// console.log(r)