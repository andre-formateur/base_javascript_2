/*

Exercice 4.3 : La liste d'invités
Partez de ce tableau :

const invites = ["Alice", "Bob", "Chloé"];

1. Demandez un prénom avec prompt.
2. Cherchez sa position dans la liste avec indexOf.
3. Si la personne est sur la liste, affichez Bienvenue Alice ! et retirez-la de la liste pour qu'elle ne puisse pas entrer deux fois. Sinon, affichez Désolé, vous n'êtes pas sur la liste.
4. Affichez les invités restants, par exemple Invités restants : Bob, Chloé.

Tests : Alice (invités restants : Bob, Chloé), puis Zoé (liste inchangée : Alice, Bob, Chloé).

💡 Piège : si indexOf renvoie -1, alors splice(-1, 1) supprimerait le dernier élément du tableau ! Placez le splice dans la branche où la personne est présente.

Bonus ⭐ : répétez le programme avec une boucle do while, tant que l'utilisateur répond OK à la question Un autre invité ? (avec confirm).

*/

const invites = ["Alice", "Bob", "Chloé"];

do {
    const prenom = prompt("Qui êtes-vous ?");

    const position = invites.indexOf(prenom);

    if(position !== -1) {
        invites.splice(position, 1);
        alert(`Bienvenue ${prenom} !`)
    } else {
        alert("Vous n'êtes pas dans la liste !");
    }

    alert("Invité à attendre : " + invites.join(", "))
} while(invites.length > 0 && confirm("Un autre invité ?"))
