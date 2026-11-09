/*

Exercice 5.3 : Inverser et faire tourner un tableau
Partez de ce tableau :

const original = [1, 2, 3, 4, 5];

1. Construisez un nouveau tableau inverse contenant les mêmes éléments dans l'ordre inverse. Le tableau original ne doit pas être modifié.

*/

const original = [1, 2, 3, 4, 5, 6, 7];

const inverse = [];

for(let i = (original.length - 1); i >= 0 ; i--) {
    inverse.push(original[i])
}

console.log(inverse);