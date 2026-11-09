/*

Structure de l'objet : 
{ prenom: "Alice", nom: "Martin", telephone: "0601020304", favori: true }

*/

const contact = [];
let reponseMenu;

do {

    reponseMenu = prompt(`
        === CARNET DE CONTACTS ===
        1. Ajouter un contact
        2. Afficher les contacts
        3. Rechercher un contact
        4. Quitter
    `)

    switch(reponseMenu) {
        case "1":
            contact.push({
                prenom: prompt("Quel est votre prénom ?"),
                nom: prompt("Quel est votre nom ?"),
                telephone: prompt("Quel est votre numéro de téléphone ?"),
                favori: confirm("Ajouter aux favoris ?")
            })
        break;
        case "2":
            if(contact.length === 0) {
                alert("Le carnet est vide.");
            } else {
                let reponse = "";
                for(const index in contact) {
                    const favoris = contact[index].favori ? " ⭐\n" : "\n";
                    reponse = reponse + (Number(index) + 1) + `. ${contact[index].prenom} ${contact[index].nom} - ${contact[index].telephone}` + favoris;
                }
                alert(reponse);
            }
        break;
        case "3":
            const prenomSaisis = prompt("Saisissez un prénom");
            let find = false;

            for(const person of contact) {
                if(person.prenom === prenomSaisis) {
                    alert(`${person.prenom} ${person.nom} : ${person.telephone}`);
                    find = true;
                }
            }

            if(find === false) {
                alert("Aucun contact trouvé.")
            }

        break;
        case "4":
            alert(`Au revoir ! Vous avez ${contact.length} contact(s).`)
        break;
        default: 
            alert("Choix invalide.");
        break;
    }

} while(reponseMenu !== "4")