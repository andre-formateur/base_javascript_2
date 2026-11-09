/*

Exercice 1.3 : Mon premier objet
1. Créez un objet personne avec les propriétés prenom, nom, age et ville.
2. Affichez la phrase Alice Martin a 25 ans et habite à Lyon. avec l'interpolation et la notation avec le point.
3. Affichez le nom avec la notation avec les crochets, puis la ville en utilisant une variable cle qui vaut "ville".
4. Mettez l'âge à jour (26), ajoutez une propriété metier, puis affichez l'objet complet.

*/

const personne = {
    prenom: "Alice",
    nom: "Martin",
    age: 25,
    ville: "Lyon"
};

console.log(`${personne.prenom} ${personne.nom} a ${personne.age} ans et habite à ${personne.ville}`);
console.log(personne['ville']);

personne.age = 26;
personne.metier = "Développeuse";

console.log(personne)