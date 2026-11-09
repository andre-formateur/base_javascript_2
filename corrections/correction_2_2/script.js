/*
    Exercice 2.2 : La file d'attente
    Partez de ce tableau :

    const file = ["Alice", "Bob"];

    1. Chloé arrive : ajoutez-la à la fin de la file.
    2. Une personne prioritaire, "VIP", passe devant tout le monde : ajoutez-la au début.
    3. Servez la première personne (retirez-la) et affichez Servi : VIP.
    4. La dernière personne de la file s'en va : retirez-la et affichez Parti : Chloé.
    5. Affichez la file restante.
*/

const file = ["Alice", "Bob"];

// Ajout de Chloé à la fin
file.push("Chloé");

// Arrivé du VIP
file.unshift("VIP");

// On sert la première personne
const servi = file.shift();
console.log(`Servi : ${servi}`)

// La dernière personne de la file s'en va
const parti = file.pop();
console.log(`Parti: ${parti}`)

// Voici la file d'attente :
console.log("Fil d'attente: " + file.join(", "))