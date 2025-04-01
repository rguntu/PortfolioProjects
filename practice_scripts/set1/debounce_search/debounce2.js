function handleSearch(event) {
    console.log("handleSearch", event.target.value)
}

function debounce(fn, tsm) {
    let timer;
    return function(args) {
        clearTimeout(timer)
        setTimeout(() => {
            fn.apply(this, args)
        }, tsm)
    }

}