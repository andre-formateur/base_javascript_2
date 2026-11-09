/*

Exercice 1.2 : Compte à rebours
1. Avec une boucle for, affichez les nombres de 10 à 0 (un par ligne).
2. Une fois la boucle terminée, affichez Décollage !.
3. Affichez ensuite les nombres pairs de 0 à 20 avec une autre boucle for dont le compteur augmente de 2 à chaque tour.

*/

for(let i = 10; i >= 0; i--) {
    console.log(i)
}

console.log("Décollage !")

for(let i = 0; i <= 20; i = i + 2) {
    console.log(i)
}