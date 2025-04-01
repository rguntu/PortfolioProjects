function fetchData() {
    return new Promise((resolve, reject) => {
        const success = false;
        if(success) {
            resolve("success")
        } else {
            resolve("failure")
        }
    })
}

const result = async () => {
    console.log(await fetchData())
}
result()

// fetchData().then(result => {
//     console.log(result)
// })
// .catch(error => {
//     console.log(error)
// })