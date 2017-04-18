// 1 a
// Nach 2 Sekunden erscheinen 5 alerts nacheinander, in jeder steht 4 drin.
// 1 b

// Variante 1
for(let i=0;i<4;i++){
    window.setTimeout(()=>{
        window.alert(i)
    }, 2000)
}
// let erstellt eine Variable (Binding-Context) pro Block (for definiert einen Block).

// Variante 2
[0,1,2,3,4].forEach(function(i){
    window.setTimeout(function(){
        window.alert(i)
    }, 2000)
})
// i wird jeweils an das argument des callbacks gebunden, der ist stehts so wie er sollte.