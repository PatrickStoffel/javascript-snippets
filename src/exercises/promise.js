// 1
// a
// Schreibe eine Funktion calcX,
// - die eine Zahl z zwischen 0 und 1 entgegen nimmt
// - ein Promise retourniert, welches bei einer Zahl
//      - >= 0.8 diese mit als Fehler rejected
//      - < 0.8 diese Zahl resolved
// Rufe die Funktion 10 mal auf und logge die Ergebnisse.

// b
// Ergänze calcX so, dass Sie jeweils um Math.random()*100 wartet bevor sie ein Resultat generiert.
// Rufe die Funktion 10 mal auf und logge die Ergebnisse.
// Was ist anders im Vergleich zum Verhalten unter 1a?

// c
// Rufe die Funktion calcX 10 mal auf, summiere alle erfolgreichen Werte. Logge die fehlschläge.
// Verwende jeweils i/10 als Parameterwert.


// 2
// Zeichne für folgende Code-Schnippsel ein Ablaufdiagram aller möglichen Abläufe.

/*
Beispiele aus einer Onlinebanking Applikation --> siehe Notizen
// a
getDetails(card.id)
    .then(initDetails.bind(null, card))
    .finally(loading.bind(null, false))

// b
showExecuteListConfirmationDialog()
    .then(callExecuteApi.bind(null, paymentsForExecution))
    .then(done.bind(null, true))
    .then(MessageBus.publish.bind(null, 'paymentListExecuted', paymentList, executionDate))
    .catch(hanleError)

// c
indicateLoading(true)
    .then(loadRegions.bind(null, card.id))
    .then(assignRegions)
    .catch(handleError)
    .finally(indicateLoading.bind(this, false))
*/



// 1a
function calcX(z){
     return new Promise((res, rej)=>{
         if(z < 0.8){
             res(z)
         }else{
             rej(new Error(`Zahl ${z} ist zu gross`))
         }
     })
}

//calcX(0.8).then(console.log).catch(console.log)
//calcX(0.3).then(console.log).catch(console.log)

//
let i = 0
while(++i <= 10){
     calcX(i/10).then(console.log).catch(_=>_) //catch-Handler ist eine leere Funktion, _ ist ein gültiger Variablen-Name
}
// 1
// a
// Schreibe eine Funktion calcX,
// - die eine Zahl z zwischen 0 und 1 entgegen nimmt
// - ein Promise retourniert, welches bei einer Zahl
//      - >= 0.8 diese als Fehler rejected
//      - < 0.8 diese Zahl resolved
// Rufe die Funktion 10 mal auf und logge die Ergebnisse.

// b
// Ergänze calcX so, dass Sie jeweils um (Math.random()*100)ms wartet bevor sie ein Resultat generiert.
// Rufe die Funktion 10 mal auf und logge die Ergebnisse.
// Was ist anders im Vergleich zum Verhalten unter 1a?

// c
// Rufe die Funktion calcX 10 mal auf, summiere alle erfolgreichen Werte. Logge die fehlschläge.
// Verwende jeweils i/10 als Parameterwert.


// 2
// Zeichne für folgende Code-Schnippsel ein Ablaufdiagram aller möglichen Abläufe.

// a
getDetails(card.id)
    .then(initDetails.bind(null, card))
    .finally(loading.bind(null, false))

// b
showExecuteListConfirmationDialog()
    .then(callExecuteApi.bind(null, paymentsForExecution))
    .then(done.bind(null, true))
    .then(MessageBus.publish.bind(null, 'paymentListExecuted', paymentList, executionDate))
    .catch(handleError)

// c
indicateLoading(true)
    .then(loadRegions.bind(null, card.id))
    .then(assignRegions)
    .catch(handleError)
    .finally(indicateLoading.bind(this, false))
