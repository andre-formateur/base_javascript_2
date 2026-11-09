/*

Exercice 3.1 : Bilan de notes
Partez de ce tableau :

const notes = [12, 15, 9, 18, 14];

À l'aide d'une boucle (for ou for of), calculez et affichez :

1. la somme des notes ;
2. la moyenne ;
3. la note la plus haute ;
4. la note la plus basse.


*/

const notes = [12, 15, 9, 18, 14];

const operation = {
    addition: 0,
    moyenne: 0,
    noteHaute: 0,
    noteBasse: 9999
}

for(note of notes) {
    
    // ADDITION
    operation.addition = operation.addition + note;
    
    // MOYENNE ETAPE 1
    operation.moyenne = operation.moyenne + note;

    // LA NOTE LA PLUS HAUTE
    operation.noteHaute = operation.noteHaute < note ? note : operation.noteHaute;
    
    // LA NOTE LA PLUS BASSE
    operation.noteBasse = operation.noteBasse > note ? note : operation.noteBasse;


}

// MOYENNE ETAPE 2
operation.moyenne = operation.moyenne / notes.length

console.log(operation)