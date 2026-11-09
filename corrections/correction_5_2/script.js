/*

Exercice 5.2 : Le magasin
Partez de cet objet, qui mélange objet dans objet, tableau dans objet et objet dans tableau :

const magasin = {
  nom: "Tech Store",
  adresse: { ville: "Lyon", codePostal: "69000" },
  produits: [
    { nom: "Clavier", prix: 45, tags: ["bureau", "informatique"] },
    { nom: "Souris", prix: 20, tags: ["informatique"] },
    { nom: "Écran", prix: 150, tags: ["bureau", "image", "informatique"] }
  ]
};

1. Affichez Tech Store est situé à Lyon (69000).
2. Affichez le nom du deuxième produit, le dernier tag du premier produit, puis le nombre de tags de l'écran.
3. Avec une boucle for of, affichez une ligne par produit, avec ses tags assemblés avec join.
4. Calculez et affichez le prix total du catalogue.
5. Ajoutez au catalogue un produit { nom: "Webcam", prix: 60, tags: ["image"] }, puis ajoutez le tag "streaming" à la webcam. Affichez le nombre de produits, le nouveau prix total et les tags de la webcam.

*/

const magasin = {
  nom: "Tech Store",
  adresse: { ville: "Lyon", codePostal: "69000" },
  produits: [
    { nom: "Clavier", prix: 45, tags: ["bureau", "informatique"] },
    { nom: "Souris", prix: 20, tags: ["informatique"] },
    { nom: "Écran", prix: 150, tags: ["bureau", "image", "informatique"] }
  ]
};

// 1. Affichez Tech Store est situé à Lyon (69000).
console.log(`${magasin.nom} est situé à ${magasin.adresse.ville} (${magasin.adresse.codePostal}).`)

// 2. Affichez le nom du deuxième produit, le dernier tag du premier produit, puis le nombre de tags de l'écran.
console.log(magasin.produits[1].nom)
console.log(magasin.produits[0].tags[magasin.produits[0].tags.length - 1])
console.log(magasin.produits[2].tags.length)

// 3. Avec une boucle for of, affichez une ligne par produit, avec ses tags assemblés avec join.
for(produit of magasin.produits) {
    const tags = produit.tags.join(", ")
    console.log(`Le produit "${produit.nom}" au prix de ${produit.prix} € à les tags suivant : ${tags}`)
}

// 4. Calculez et affichez le prix total du catalogue.
let total = 0;
for(produit of magasin.produits) {
    total = total + produit.prix;
}
console.log(total)

// 5. Ajoutez au catalogue un produit { nom: "Webcam", prix: 60, tags: ["image"] }, puis ajoutez le tag "streaming" à la webcam. Affichez le nombre de produits, le nouveau prix total et les tags de la webcam.
magasin.produits.push({ nom: "Webcam", prix: 60, tags: ["image"] })
magasin.produits[3].tags.push("streaming");

console.log(magasin.produits.length)

total = 0;
for(produit of magasin.produits) {
    total = total + produit.prix;
}
console.log(total)

console.log(magasin.produits[3].tags.join(", "))