'use strict'
// 1a
// function calcX(base){
//     return new Promise((res, rej)=>{
//         if(base < 0.8){
//             res(base)
//         }else{
//             rej(new Error(`Base ${base} ist zu klein`))
//         }
//     })
// }

//calcX(0.8).then(console.log).catch(console.log)
//calcX(0.3).then(console.log).catch(console.log)
// let i = 0
// while(++i <= 10){
//     calcX(i/10).then(console.log).catch(_=>_)
// }

// 1b
function calcX(base){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(base < 0.8){
                res(base)
            }else{
                rej(new Error(`Base ${base} ist zu klein`))
            }
        }, Math.random()*100)
        
    })
}
// let i = 0
// while(++i <= 10){
//     calcX(i/10).then(console.log).catch(_=>_)
// }
// Die Reihenfolge der Ergebnisse ist nicht mehr gleich, wie die der Aufrufe.

// 1c
let i = 0
let promises = []
while(++i <= 10){
    promises.push(calcX(i/10)
    .catch((e)=>{
        console.error(e)
        return 0
    }))
}
Promise.all(promises)
.then((values)=>{
    return values.reduce((sum, value)=>sum+=value, 0)
})
.then(console.log)