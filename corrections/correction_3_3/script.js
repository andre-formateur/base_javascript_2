/*

Exercice 3.3 : La fiche de la voiture
Partez de cet objet :

const voiture = {
  marque: "Peugeot",
  modele: "208",
  annee: 2020,
  kilometrage: 45000
};

1. Avec une boucle for in, affichez chaque propriété sous la forme clé : valeur.
2. Mettez le kilométrage à jour (46500) et ajoutez une propriété couleur valant "bleu".
3. Relancez la boucle for in pour vérifier vos modifications.
4. Comptez les propriétés de l'objet avec une variable nbProprietes (déclarée avec let) et affichez La voiture a 5 propriétés.

*/

const voiture = {
  marque: "Peugeot",
  modele: "208",
  annee: 2020,
  kilometrage: 45000
};

// 1. Avec une boucle for in, affichez chaque propriété sous la forme clé : valeur.
for(const index in voiture) {
    console.log(`${index} : ${voiture[index]}`)
}

// 2. Mettez le kilométrage à jour (46500) et ajoutez une propriété couleur valant "bleu".
voiture.kilometrage = 46500;
voiture.couleur = "bleu";

// 3. Relancez la boucle for in pour vérifier vos modifications.
console.log("\n === MAJ ===")
for(const index in voiture) {
    console.log(`${index} : ${voiture[index]}`)
}

// 4. Comptez les propriétés de l'objet avec une variable nbProprietes (déclarée avec let) et affichez La voiture a 5 propriétés.
let nbProprietes = 0;

for(const index in voiture) {
    nbProprietes++;
}

console.log(`La voiture a ${nbProprietes} propriétés.`)