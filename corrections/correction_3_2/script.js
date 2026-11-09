/*

Exercice 3.2 : Modifier une liste
Partez de ces tableaux :

const lettres = ["A", "B", "C", "D", "E"];
const suite = ["F", "G"];

1. Supprimez "C" avec splice. Affichez l'élément supprimé, puis le tableau.
2. Insérez "X" à l'indice 1, sans rien supprimer. Affichez le tableau.
3. Remplacez "D" par "Z". Affichez le tableau.
4. Fusionnez lettres et suite dans un nouveau tableau alphabet, puis affichez-le.

*/

const lettres = ["A", "B", "C", "D", "E"];
const suite = ["F", "G"];

// 1. Supprimez "C" avec splice. Affichez l'élément supprimé, puis le tableau.
const supprime = lettres.splice(2, 1);
console.log(supprime[0])
console.log(lettres)

// 2. Insérez "X" à l'indice 1, sans rien supprimer. Affichez le tableau.
lettres.splice(1, 0, "X")
console.log(lettres)

// 3. Remplacez "D" par "Z". Affichez le tableau.
lettres.splice(3, 1, "Z")
console.log(lettres)

// 4. Fusionnez lettres et suite dans un nouveau tableau alphabet, puis affichez-le.
const alphabet = lettres.concat(suite);
console.log(alphabet)