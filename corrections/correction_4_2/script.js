/*

Exercice 4.2 : Saisie sécurisée

1. Demandez son âge à l'utilisateur avec prompt et répétez la question tant que la réponse n'est pas valide (un nombre entre 1 et 120). Utilisez une boucle do while.
2. Quand l'âge est valide, affichez Vous avez 25 ans. (avec la valeur saisie).

Tests à faire : 0, 150, -5, abc, puis 25.

💡 isNaN(age) permet de vérifier que le type de la variable age est bien NaN

*/

let age;

do {
    age = Number(prompt('Quel age avez-vous ?'))
} while (age < 1 || age > 120 || isNaN(age))

alert(`Vous avez ${age} ans`)