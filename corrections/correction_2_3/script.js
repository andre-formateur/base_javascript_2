/*

Exercice 2.3 : Les jours de la semaine
Partez de ce tableau :

const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

1. Affichez l'index de "jeudi".
2. Affichez true ou false selon que "samedi" est dans le tableau, puis selon que "funday" y est.
3. Affichez les jours du week-end sous forme de tableau.
4. Affichez les cinq premiers jours sous la forme d'une seule chaîne, séparés par -.

*/

const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

// Affichez l'index de "jeudi".
const jeudiIndex = jours.indexOf("jeudi")
console.log(jeudiIndex)

// Affichez true ou false selon que "samedi" est dans le tableau, puis selon que "funday" y est.
const isSamedi = jours.indexOf("samedi") !== -1 ? true : false;
const isFunday = jours.indexOf("funday") !== -1 ? true : false;

console.log(isSamedi)
console.log(isFunday)

// Affichez les jours du week-end sous forme de tableau.
const weekEnd = jours.slice(5)
console.log(weekEnd)

// Affichez les cinq premiers jours sous la forme d'une seule chaîne, séparés par -.
const weekWork = jours.slice(0, 5).join("-")
console.log(weekWork)