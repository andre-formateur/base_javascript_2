# Exercices JavaScript : tableaux, boucles et objets

Ces exercices reprennent tout ce que nous avons vu dans ce cours : **tableaux**, **boucles** (`for`, `for in`, `for of`, `while`, `do while`), **objets**, **imbrications** et **méthodes de tableaux** (`push`, `pop`, `unshift`, `shift`, `slice`, `splice`, `join`, `indexOf`, `concat`). Ils réutilisent aussi les notions du cours précédent (variables, conditions, interactions).

Il y a **5 niveaux de 3 exercices**, de plus en plus difficiles, puis un **challenge bonus**.

## Ce que vous allez pratiquer

| Niveau | Exercices | Notions principales |
|--------|-----------|---------------------|
| 1 : Très facile 🟢 | 1.1 à 1.3 | tableaux, indices, boucle `for`, objets |
| 2 : Facile 🟡 | 2.1 à 2.3 | `for`, `for of`, `for in`, `push`, `pop`, `unshift`, `shift`, `indexOf`, `slice`, `join` |
| 3 : Moyen 🟠 | 3.1 à 3.3 | calculs avec une boucle, `splice`, `concat`, parcours d'un objet avec `for in` |
| 4 : Difficile 🔴 | 4.1 à 4.3 | `while`, `do while`, `prompt`, `indexOf` + `splice` |
| 5 : Très difficile 🟣 | 5.1 à 5.3 | doublons, imbrications, boucle à l'envers |
| 🏆 Challenge | | toutes les notions du cours |

## Avant de commencer

Travaillez avec deux fichiers :

```
mon-projet/
├── index.html
└── script.js
```

Reliez le script dans `index.html` :

```html
<script src="script.js"></script>
```

Ouvrez la page dans le navigateur, puis la console (touche **F12**, onglet **Console**) pour voir vos `console.log`.

### Conseils

- Écrivez le code **vous-même**, sans copier-coller, et gardez le **mémento** à portée de main.
- Testez avec **plusieurs valeurs** différentes.
- Si une boucle ne s'arrête jamais, fermez l'onglet du navigateur : c'est probablement une **boucle infinie** (vérifiez que votre compteur évolue bien).
- Pensez aux méthodes qui **renvoient un résultat** (`slice`, `concat`, `join`, `indexOf`) : il faut **récupérer** ce résultat dans une variable ou l'afficher.
- L'affichage exact d'un tableau ou d'un objet dans la console dépend du navigateur : seul le contenu compte.
- Faites un commit Git après chaque niveau terminé.

---

## Niveau 1 : Très facile 🟢

### Exercice 1.1 : Mon premier tableau

1. Créez un tableau `fruits` contenant `"pomme"`, `"banane"` et `"orange"`.
2. Affichez le tableau complet, puis le **premier** fruit et le **dernier**.
3. Remplacez le **deuxième** fruit par `"kiwi"`, puis affichez le tableau et sa taille avec `length`.

**Résultat attendu :**

```
["pomme", "banane", "orange"]
pomme
orange
["pomme", "kiwi", "orange"]
3
```

💡 Les indices commencent à `0`. Le dernier indice est `length - 1`.

### Exercice 1.2 : Compte à rebours

1. Avec une boucle `for`, affichez les nombres de **10** à **0** (un par ligne).
2. Une fois la boucle terminée, affichez `Décollage !`.
3. Affichez ensuite les nombres **pairs de 0 à 20** avec une autre boucle `for` dont le compteur augmente de 2 à chaque tour.

**Résultat attendu (début) :**

```
10
9
...
0
Décollage !
0
2
4
...
20
```

💡 Pour compter à l'envers, la condition et l'incrémentation changent : `i--` et `i >= 0`.

### Exercice 1.3 : Mon premier objet

1. Créez un objet `personne` avec les propriétés `prenom`, `nom`, `age` et `ville`.
2. Affichez la phrase `Alice Martin a 25 ans et habite à Lyon.` avec l'**interpolation** et la notation avec le point.
3. Affichez le nom avec la notation avec les **crochets**, puis la ville en utilisant une **variable** `cle` qui vaut `"ville"`.
4. Mettez l'âge à jour (`26`), ajoutez une propriété `metier`, puis affichez l'objet complet.

---

## Niveau 2 : Facile 🟡

### Exercice 2.1 : Dire bonjour à tout le monde

Partez de ce tableau :

```js
const prenoms = ["Alice", "Bob", "Chloé", "David"];
```

1. Avec une boucle `for`, affichez `Bonjour Alice !`, `Bonjour Bob !`... (une ligne par prénom).
2. Refaites exactement la même chose avec une boucle `for of`.
3. Avec une boucle `for in`, affichez l'**indice** et le prénom : `0 : Alice`, `1 : Bob`...
4. Affichez enfin `Il y a 4 prénoms.` en utilisant `length` (et non le nombre `4` écrit à la main).

**Résultat attendu pour la question 3 :**

```
0 : Alice
1 : Bob
2 : Chloé
3 : David
```

💡 Avec `for in`, la variable de la boucle contient l'**indice**. Pour obtenir le prénom, il faut ensuite écrire `prenoms[indice]`.

**Bonus ⭐ :** dans la boucle `for in`, essayez d'afficher `indice + 1`. Que remarquez-vous ? Vérifiez avec `typeof indice`.

### Exercice 2.2 : La file d'attente

Partez de ce tableau :

```js
const file = ["Alice", "Bob"];
```

1. Chloé arrive : ajoutez-la à la **fin** de la file.
2. Une personne prioritaire, `"VIP"`, passe devant tout le monde : ajoutez-la au **début**.
3. Servez la **première** personne (retirez-la) et affichez `Servi : VIP`.
4. La **dernière** personne de la file s'en va : retirez-la et affichez `Parti : Chloé`.
5. Affichez la file restante.

**Résultat attendu :**

```
Servi : VIP
Parti : Chloé
["Alice", "Bob"]
```

💡 `pop()` et `shift()` **renvoient** l'élément qu'ils retirent : récupérez-le dans une variable.

### Exercice 2.3 : Les jours de la semaine

Partez de ce tableau :

```js
const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
```

1. Affichez l'indice de `"jeudi"`.
2. Affichez `true` ou `false` selon que `"samedi"` est dans le tableau, puis selon que `"funday"` y est.
3. Affichez les jours du **week-end** sous forme de tableau.
4. Affichez les **cinq premiers** jours sous la forme d'une seule chaîne, séparés par ` - `.

**Résultat attendu :**

```
3
true
false
["samedi", "dimanche"]
lundi - mardi - mercredi - jeudi - vendredi
```

💡 Pour savoir si un élément est présent, comparez le résultat de `indexOf` à `-1`. Dans `slice(début, fin)`, l'indice de fin est **exclu**, et `slice` ne modifie pas le tableau d'origine.

---

## Niveau 3 : Moyen 🟠

### Exercice 3.1 : Bilan de notes

Partez de ce tableau :

```js
const notes = [12, 15, 9, 18, 14];
```

À l'aide d'une boucle (`for` ou `for of`), calculez et affichez :

- la **somme** des notes ;
- la **moyenne** ;
- la **note la plus haute** ;
- la **note la plus basse**.

**Résultat attendu :**

```
Somme : 68
Moyenne : 13.6
Note la plus haute : 18
Note la plus basse : 9
```

💡 Pour la plus haute et la plus basse, initialisez une variable avec la **première** note du tableau, puis comparez-la avec chaque note.

### Exercice 3.2 : Modifier une liste

Partez de ces tableaux :

```js
const lettres = ["A", "B", "C", "D", "E"];
const suite = ["F", "G"];
```

1. **Supprimez** `"C"` avec `splice`. Affichez l'élément supprimé, puis le tableau.
2. **Insérez** `"X"` à l'indice 1, sans rien supprimer. Affichez le tableau.
3. **Remplacez** `"D"` par `"Z"`. Affichez le tableau.
4. **Fusionnez** `lettres` et `suite` dans un nouveau tableau `alphabet`, puis affichez-le.

**Résultat attendu :**

```
["C"]
["A", "B", "D", "E"]
["A", "X", "B", "D", "E"]
["A", "X", "B", "Z", "E"]
["A", "X", "B", "Z", "E", "F", "G"]
```

💡 `splice(début, nombreÀSupprimer, ...élémentsÀAjouter)`. À l'étape 3, où se trouve `"D"` après les modifications précédentes ?

### Exercice 3.3 : La fiche de la voiture

Partez de cet objet :

```js
const voiture = {
  marque: "Peugeot",
  modele: "208",
  annee: 2020,
  kilometrage: 45000
};
```

1. Avec une boucle `for in`, affichez chaque propriété sous la forme `clé : valeur`.
2. Mettez le kilométrage à jour (`46500`) et ajoutez une propriété `couleur` valant `"bleu"`.
3. Relancez la boucle `for in` pour vérifier vos modifications.
4. Comptez les propriétés de l'objet avec une variable `nbProprietes` (déclarée avec `let`) et affichez `La voiture a 5 propriétés.`

**Résultat attendu pour la question 1 :**

```
marque : Peugeot
modele : 208
annee : 2020
kilometrage : 45000
```

💡 Dans un `for in`, la variable de la boucle contient le **nom** de la propriété (sous forme de chaîne). Pour obtenir sa valeur, il faut les **crochets** : `voiture[cle]`. Avec `voiture.cle`, vous obtiendrez `undefined`.

---

## Niveau 4 : Difficile 🔴

### Exercice 4.1 : Devinez le nombre

Le programme possède un nombre secret :

```js
const secret = 7;
```

1. Demandez un nombre à l'utilisateur avec `prompt`.
2. **Tant que** ce n'est pas le bon nombre, redemandez-lui (boucle `while`).
3. Comptez le nombre d'essais.
4. Quand le nombre est trouvé, affichez avec `alert` : `Bravo ! Vous avez trouvé en 3 essais.`

**Exemple de déroulement :**

```
Proposition : 5  → on redemande
Proposition : 9  → on redemande
Proposition : 7  → Bravo ! Vous avez trouvé en 3 essais.
```

💡 Demandez une première proposition **avant** la boucle, puis redemandez-en une **à l'intérieur** de la boucle. N'oubliez pas de convertir la saisie avec `Number(...)`.

**Bonus ⭐ :** à chaque mauvaise proposition, indiquez avec `alert` si le nombre secret est `Plus grand` ou `Plus petit`.

### Exercice 4.2 : Saisie sécurisée

Demandez son âge à l'utilisateur avec `prompt` et **répétez la question tant que la réponse n'est pas valide** (un nombre entre 1 et 120). Utilisez une boucle `do while`.

Quand l'âge est valide, affichez `Vous avez 25 ans.` (avec la valeur saisie).

**Tests à faire :** `0`, `150`, `-5`, `abc`, puis `25`.

💡 Écrivez la condition de répétition comme **la négation** de « l'âge est valide » : `!(age >= 1 && age <= 120)`. Ainsi, une saisie qui n'est pas un nombre (comme `abc`) est elle aussi refusée.

### Exercice 4.3 : La liste d'invités

Partez de ce tableau :

```js
const invites = ["Alice", "Bob", "Chloé"];
```

1. Demandez un prénom avec `prompt`.
2. Cherchez sa position dans la liste avec `indexOf`.
3. Si la personne est sur la liste, affichez `Bienvenue Alice !` et **retirez-la** de la liste pour qu'elle ne puisse pas entrer deux fois. Sinon, affichez `Désolé, vous n'êtes pas sur la liste.`
4. Affichez les invités restants, par exemple `Invités restants : Bob, Chloé`.

**Tests :** `Alice` (invités restants : Bob, Chloé), puis `Zoé` (liste inchangée : Alice, Bob, Chloé).

💡 **Piège :** si `indexOf` renvoie `-1`, alors `splice(-1, 1)` supprimerait le **dernier** élément du tableau ! Placez le `splice` dans la branche où la personne **est** présente.

**Bonus ⭐ :** répétez le programme avec une boucle `do while`, tant que l'utilisateur répond OK à la question `Un autre invité ?` (avec `confirm`).

---

## Niveau 5 : Très difficile 🟣

### Exercice 5.1 : Supprimer les doublons

Partez de ce tableau :

```js
const nombres = [1, 2, 2, 3, 4, 4, 4, 5];
```

Construisez un nouveau tableau `uniques` qui contient chaque nombre **une seule fois**, **dans l'ordre d'apparition**. Le tableau `nombres` ne doit pas être modifié.

**Résultat attendu :**

```
[1, 2, 3, 4, 5]
```

💡 Parcourez `nombres` avec une boucle, et n'ajoutez un nombre à `uniques` (avec `push`) **que s'il n'y est pas déjà** (avec `indexOf`).

**Bonus ⭐ :** affichez aussi `3 doublon(s) supprimé(s).`, en le calculant à partir des deux tailles.

### Exercice 5.2 : Le magasin

Partez de cet objet, qui mélange **objet dans objet**, **tableau dans objet** et **objet dans tableau** :

```js
const magasin = {
  nom: "Tech Store",
  adresse: { ville: "Lyon", codePostal: "69000" },
  produits: [
    { nom: "Clavier", prix: 45, tags: ["bureau", "informatique"] },
    { nom: "Souris", prix: 20, tags: ["informatique"] },
    { nom: "Écran", prix: 150, tags: ["bureau", "image", "informatique"] }
  ]
};
```

1. Affichez `Tech Store est situé à Lyon (69000).`
2. Affichez le nom du **deuxième** produit, le **dernier tag** du premier produit, puis le **nombre de tags** de l'écran.
3. Avec une boucle `for of`, affichez une ligne par produit, avec ses tags assemblés avec `join`.
4. Calculez et affichez le **prix total** du catalogue.
5. Ajoutez au catalogue un produit `{ nom: "Webcam", prix: 60, tags: ["image"] }`, puis ajoutez le tag `"streaming"` à la webcam. Affichez le nombre de produits, le nouveau prix total et les tags de la webcam.

**Résultat attendu :**

```
Tech Store est situé à Lyon (69000).
Souris
informatique
3
Clavier : 45 € [bureau, informatique]
Souris : 20 € [informatique]
Écran : 150 € [bureau, image, informatique]
Prix total : 215 €
Nombre de produits : 4
Prix total : 275 €
Tags de la webcam : image, streaming
```

💡 Lisez chaque accès de **gauche à droite** : `magasin.produits[0].tags[1]` donne le magasin, puis ses produits, puis le premier produit, puis ses tags, puis le deuxième tag.

### Exercice 5.3 : Inverser et faire tourner un tableau

Partez de ce tableau :

```js
const original = [1, 2, 3, 4, 5];
```

1. Construisez un **nouveau tableau** `inverse` contenant les mêmes éléments dans l'ordre inverse. Le tableau `original` ne doit pas être modifié.
2. **Rotation à droite de 2 positions** : le dernier élément passe au début, deux fois de suite. Faites-la sur une **copie** (`const copie = original.slice();`).
3. **Rotation à gauche de 2 positions** : le premier élément passe à la fin, deux fois de suite, sur une nouvelle copie.

**Résultat attendu :**

```
[5, 4, 3, 2, 1]
[4, 5, 1, 2, 3]
[3, 4, 5, 1, 2]
```

💡 Pour la question 1, parcourez `original` avec une boucle `for` **de la fin vers le début**. Pour les rotations, combinez `pop` avec `unshift`, ou `shift` avec `push`, dans une boucle qui répète l'opération deux fois.

**Bonus ⭐ :** affichez `true` si le tableau est un **palindrome** (identique à l'endroit et à l'envers), sinon `false`. Testez avec `[1, 2, 3, 2, 1]` (`true`) et `[1, 2, 3]` (`false`).

---

## 🏆 Challenge bonus : Le carnet de contacts

Ce challenge reprend **toutes les notions** du cours : tableaux, objets, imbrication, boucles, méthodes de tableaux, conditions, `switch`, booléens, interpolation et boîtes de dialogue.

Vous allez créer un **carnet de contacts** piloté par un menu, qui tourne **tant que l'utilisateur ne choisit pas de quitter**.

### Les règles

**1. Les données.** Les contacts sont stockés dans un tableau `contacts`, initialement vide. Chaque contact est un **objet** :

```js
{ prenom: "Alice", nom: "Martin", telephone: "0601020304", favori: true }
```

**2. Le menu.** Avec une boucle `do while`, affichez le menu avec `prompt` tant que l'utilisateur n'a pas choisi `4` :

```
=== CARNET DE CONTACTS ===
1. Ajouter un contact
2. Afficher les contacts
3. Rechercher un contact
4. Quitter
```

**3. Les actions** (avec un `switch` sur le choix de l'utilisateur) :

- **1 : Ajouter.** Demandez le prénom, le nom et le téléphone avec `prompt`, puis demandez avec `confirm` : `Ajouter aux favoris ?`. Ajoutez l'objet obtenu dans le tableau avec `push`.
- **2 : Afficher.** Si le carnet est vide, affichez avec `alert` : `Le carnet est vide.` Sinon, affichez la liste numérotée dans **un seul** `alert`, en ajoutant ⭐ après les favoris (ternaire).
- **3 : Rechercher.** Demandez un prénom, parcourez le tableau avec une boucle `for of`. Si un contact correspond, affichez `Prénom Nom : téléphone`, sinon `Aucun contact trouvé.`
- **4 : Quitter.** Affichez `Au revoir ! Vous avez X contact(s).`
- **Autre choix :** affichez `Choix invalide.`

### Exemple de scénario

| Action | Saisies | Résultat attendu |
|--------|---------|------------------|
| 2 | (carnet vide) | `Le carnet est vide.` |
| 1 | Alice, Martin, 0601020304, OK | contact ajouté (favori) |
| 1 | Bob, Durand, 0611223344, Annuler | contact ajouté (non favori) |
| 2 | | voir ci-dessous |
| 3 | `Bob` | `Bob Durand : 0611223344` |
| 3 | `Zoé` | `Aucun contact trouvé.` |
| 9 | | `Choix invalide.` |
| 4 | | `Au revoir ! Vous avez 2 contact(s).` et le programme s'arrête |

Affichage attendu pour l'action 2 :

```
1. Alice Martin - 0601020304 ⭐
2. Bob Durand - 0611223344
```

💡 Pour construire le texte de la liste, utilisez une variable `texte` (au départ une chaîne vide) à laquelle vous ajoutez une ligne à chaque tour avec `+=`, dans une boucle `for` (l'indice `i` vous donne le numéro de la ligne). Le caractère spécial `\n` permet de passer à la ligne dans une chaîne.

💡 `prompt` renvoie une chaîne : pensez à comparer le choix avec `"4"` (et non le nombre `4`) dans la condition du `do while`.

### Objectifs supplémentaires (facultatifs)

- ⭐ Affichez le nombre de **favoris** dans le message de fin.
- ⭐ Pré-remplissez le carnet avec deux contacts de votre choix.
- ⭐ Rendez la recherche **insensible à la casse** (`bob`, `BOB` et `Bob` doivent fonctionner) avec `toLowerCase()`.
- ⭐⭐ Ajoutez une action **5 : Supprimer un contact** : parcourez le carnet avec une boucle `for` pour retrouver sa position, puis retirez-le avec `splice`.
- ⭐⭐ Ajoutez une action **6 : Afficher les favoris** : construisez un tableau avec les prénoms des favoris (`push`), puis affichez-le avec `join`.
- ⭐⭐ Permettez à un contact d'avoir **plusieurs numéros** : la propriété `telephones` devient un **tableau**, et l'utilisateur ajoute des numéros tant qu'il ne laisse pas la saisie vide.
- ⭐⭐ Gérez le cas où l'utilisateur clique sur **Annuler** : `prompt` renvoie alors `null`.

---

Bon courage ! 💪