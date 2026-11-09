/*

Exercice 2.1 : Dire bonjour à tout le monde
Partez de ce tableau :

const prenoms = ["Alice", "Bob", "Chloé", "David"];

1. Avec une boucle for, affichez Bonjour Alice !, Bonjour Bob !... (une ligne par prénom).
2. Refaites exactement la même chose avec une boucle for of.
3. Avec une boucle for in, affichez l'indice et le prénom : 0 : Alice, 1 : Bob...
4. Affichez enfin Il y a 4 prénoms. en utilisant length (et non le nombre 4 écrit à la main).

*/

const prenoms = ["Alice", "Bob", "Chloé", "David"];

// Avec la boucle for
console.log("=== BOUCLE FOR ===")
for(let i = 0; i < prenoms.length; i++) {
    console.log(`Bonjour ${prenoms[i]} !`);
}

// Avec la boucle for of
console.log("\n === BOUCLE FOR OF ===")
for (const prenom of prenoms) {
    console.log(`Bonjour ${prenom} !`);
}

// Avec la boucle for in
console.log("\n === BOUCLE FOR IN ===")
for (const index in prenoms) {
    console.log(`${index} : ${prenoms[index]}`);
}

// Affichage des 4 prénoms
console.log("\n === Affichage des 4 prénoms ===")
console.log(`Il y a ${prenoms.length} prénoms.`)