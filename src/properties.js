'use strict'

let obj = Object.create(null)
Object.defineProperty(obj, 'items', {
    enumerable: false,
    writable: false,
    value: []
})

Object.defineProperty(obj, 'rootProperty', {
    enumerable: true,
    writable: false,
    value: []
})

obj.add = function(item){
    this.items.push(item)
}

//obj.items = [1]
obj.add(1)
console.log(obj.items)

// keys => enumerable, getOwnPropertyNames => all
console.log(Object.keys(obj), Object.getOwnPropertyNames(obj))


let objSub = Object.create(obj)

console.log(Object.keys(objSub), Object.getOwnPropertyNames(objSub))

// for in => enumerable eigenschaften inkl prototyp chain
for(let p in objSub){
    console.log(p)
}

// ES6, nur wenn iterierbar
for(let p of [1,2,3]){
    console.log(p)
}

// ES5, hier werden die indizes (properties von array object) der elemente iteriert
for(let p in [1,2,3]){
    console.log(p)
}

