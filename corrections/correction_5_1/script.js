/*

Partez de ce tableau :

const nombres = [1, 2, 2, 3, 4, 4, 4, 5];

1. Construisez un nouveau tableau uniques qui contient chaque nombre une seule fois, dans l'ordre d'apparition. Le tableau nombres ne doit pas être modifié.

Résultat attendu :

[1, 2, 3, 4, 5]

💡 Parcourez nombres avec une boucle, et n'ajoutez un nombre à uniques (avec push) que s'il n'y est pas déjà (avec indexOf).

Bonus ⭐ : affichez aussi 3 doublon(s) supprimé(s)., en le calculant à partir des deux tailles.

*/

const nombres = [1, 2, 2, 3, 4, 4, 4, 5];

const uniques = [];

for( const nombre of nombres) {
    if(uniques.indexOf(nombre) === -1) {
        uniques.push(nombre);
    }
}

console.log(uniques)

const nmbDoublon = nombres.length - uniques.length;

console.log(`${nmbDoublon} doublon(s) supprimé(s).`)