
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/invalid-url' // this one will fail
  ];

  async function callWithPromiseALLSettled() {
    try {
        const results = await Promise.allSettled(urls.map(
            url => fetch(url).then(res => res.json)
            .then(results => {
                results.forEach((result,i) => {
                    if(result.status === 'fulfilled') {
                        console.log(`Response${i+1}`, result.value)
                    } else {
                        console.log(`Response${i+1} failed`, result.reson)
                    }
                });
            })
        ))
        console.log("All results", results)
    } catch(err) {
        console.error(err.message)
    }
       
  }

  async function callWithPromiseALL() {
    try {
        const results = await Promise.all(urls.map(url => fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("promise.all result", data)
            })
            .catch(err => {
                console.error(err.message)
            })
        ))
        console.log("All results", results)
    } catch(err) {
        console.error(err.message)
    }
       
  }

  //callWithPromiseALL()
  callWithPromiseALLSettled()