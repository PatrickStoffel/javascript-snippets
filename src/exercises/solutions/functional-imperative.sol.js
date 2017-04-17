'use strict'

// 1
// imperative
let sum = (arr)=>{
    let summe = 0
    for(let val in arr){
        summe += val
    }
    return summe
}
let s = sum([1,2,3])

// functional
// let sum = (arr)=>{
//     return arr.reduce((sum, val)=>{
//         return sum += val
//     }, 0)
// }
// let s = sum([1,2,3])

// 2
// imperative
let even = (arr)=>{
    let result = [], 
        isEven
    for(let val of arr){
        isEven = val % 2 === 0
        result.push(isEven)
    }
    return result
}
let e = even([1,2,3])

// functional
// let even = (arr)=>{
//     return arr.map((val)=>{
//         return val % 2 === 0
//     })
// }
// let e = even([1,2,3])