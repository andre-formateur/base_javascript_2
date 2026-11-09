/*

Exercice 1.1 : Mon premier tableau
1. Créez un tableau fruits contenant "pomme", "banane" et "orange".
2. Affichez le tableau complet, puis le premier fruit et le dernier.
3. Remplacez le deuxième fruit par "kiwi", puis affichez le tableau et sa taille avec length.

*/

const fruits = ["pomme", "banane", "orange"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);

// Méthode simple, ça fonctionne fruits[1] = "kiwi";

// Méthode avec splice
fruits.splice(1, 1, "kiwi")

console.log(fruits);
console.log(fruits.length)