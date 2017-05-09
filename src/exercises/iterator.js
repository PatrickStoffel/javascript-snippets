// 1
// Implementiere einen Array Iterator, der einen Array rückwärts interiert.
// Versuche zwei Varianten zu finden.

let forFun = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

forFun.reverse();

for (let value of forFun) {
  value
}


// 2 
// Schreibe eine Funktion forFun, welche
// - ein Objekt welches Symbol.iterator implementiert
// - und eine callback Funktion
// entgegen nimmt.
// Iteriere über das iterable Objekt und rufe den Callback für jeden Wert auf, 
// solange bis alle Elemente iteriert sind.
