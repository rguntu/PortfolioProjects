


const result = async () => {
    try {

        const safe = p => p.then(res => ({ok: true, res})).catch(err => {ok:false, err })
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                //console.log("Promise1")
                resolve("Promise1 resolved")
            }, 2000)
        })
        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                //console.log("Promise2")
                reject("Promise2 rejected")
            }, 2000)
        })
        const p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                //console.log("Promise3")
                resolve("Promise1 resolved")
            }, 2000)
        })


    const [p1r,p2r,p3r] = await Promise.all([safe(p1),safe(p2),safe(p3)]);
    if(p1r.ok)  console.log(await p1r)
        else console.log(p1r.error)
    if(p2r.ok)  console.log(await p2r)
        else console.log(p2r.err)
    if(p3r.ok)  console.log(await p3r)
        else console.log(p3r.error)
    // console.log(p1r,p2r,p3r) 

    // const [p1r,p2r,p3r] = await Promise.allSettled([p1,p2,p3]);
    // console.log(p1r,p2r,p3r)


    } catch(error) {
        console.log("promise failed")
    }
}

result()
