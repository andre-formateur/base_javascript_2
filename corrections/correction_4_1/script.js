/*

Exercice 4.1 : Devinez le nombre
Le programme possède un nombre secret :

const secret = 7;

1. Demandez un nombre à l'utilisateur avec prompt.
2. Tant que ce n'est pas le bon nombre, redemandez-lui (boucle while).
3. Comptez le nombre d'essais.
4. Quand le nombre est trouvé, affichez avec alert : Bravo ! Vous avez trouvé en 3 essais.

*/

const secret = 7;
let valeurUtilisateur;
let nombreEssai = 0;

do {
    nombreEssai++;
    valeurUtilisateur = Number(prompt("Quel est le numéro secret ?"))

} while (valeurUtilisateur !== secret)

alert(`Bravo ! Vous avez trouvé en ${nombreEssai} essais.`)