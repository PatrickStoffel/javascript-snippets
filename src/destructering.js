'use strict'

// swap
// let a = 1 ,b = 2, arr = [a, b];

// [b, a] = [a, b]

// // default values
// let [eins, zwei, drei = 3] = arr

// // skip
// let [one, , three] = arr.push(3) && arr

// property
let obj = {eins: 1, zwei: 2, nested: { innen : 3}};

let { eins: one, nested: {innen: inside}, zwei } = obj
