const result = async () => {
    const pArray = []
    for(let i=0; i<3; i++) {
        let p1 = new Promise((resolve, reject) => {
            if(i ===1 ) {
                setTimeout(()=>reject(`promise ${i}`), 1000)
            } else {
                setTimeout(()=>resolve(`promise ${i}`), 1000)
            }
           
        })
        pArray.push(p1);
    }

    const results = await Promise.all(pArray)
    const isSafe = p => p.then(result => {ok: true, res}).catch(err => {ok:false, err})
    const isSafe1 = async p => {
        try {
            const r = await p;
            return {ok: true, r}
        } catch(err) {
            return {ok: false, err}
        }
    }
    // const results = await Promise.allSettled(pArray)
    // results.forEach((r, index) => {
    //     if(r.status === 'fulfilled') {
    //         console.log(`${index} result success`)
    //     } else {
    //         console.log(`${index} result fail`)
    //     }
    // })
    console.log(results)
}

result()