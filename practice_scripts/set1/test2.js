// function reverseStr(str) {
//     console.log(str.split('').reverse().join(''))
// }

// function polyndrome(str) {
//     str === str.split('').reverse().join('')
// }

// reverseStr("abc")

function debounce(fn, delay) {
    let timer
    return function(args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

const person = {
    name: "alice",
    greet: function(g1, g2) {
        console.log(`${g1} name ${g2}`)
    }
}
const aPerson = {name: "bob"}

person.greet.call(aPerson, "hello", "!")


Array.from(new Map(list.map(p => [p.id, p])).values())

const uniqueList = list.reduce((acc, item) => {
    if(!acc.some(obj => obj.id !== item.id)) {
        acc.push(item)
    }
    return acc;
}, [])