'use strict'

let Kiste = (function(){
    const berechneFlaeche = Symbol()

    class Kiste{
        constructor(width, height){
            this.width = width
            this.height = height
        }

        [berechneFlaeche](){
            return this.width * this.height
        }

        flaeche(){
            return this[berechneFlaeche]()
        }
    }
    return Kiste
})()

let k = new Kiste(10, 5)

//k[berechneFlaeche]()
//k['berechneFlaeche']()
console.log(k.flaeche())