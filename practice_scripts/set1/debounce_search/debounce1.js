function handleSearch() {
    console.log("searching...")
}

function debounce(fn, time) {
    let timeOut;
    return function(...args) {
        clearTimeout(timeOut)
        setTimeout(() => {
            fn.apply(this, args)
        }, time)
    }
}

// handleSearch()
// handleSearch()
// handleSearch()

const debF = debounce(handleSearch, 5000)
debF();
debF();
debF();
