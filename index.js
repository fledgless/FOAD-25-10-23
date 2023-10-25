// fonction chiffre aléatoire
function random(min, max) {
    return Math.random() * (max - min) + min;
  }

let resultat = Math.round(random(1, 100));
console.log(resultat);

// prompt sélection de chiffre
let nombre = Number(prompt("veuillez saisir un chiffre entre 1 et 100 :"));

// prompt en cas de nombres invalides
if (nombre < 0, nombre > 100) {
    let nombre = Number(prompt("Nombre invalide, veuillez réessayer :"));
}

// resultats + nouvel essai
let i;

for (i = 1; i <= 5; i++) {
    if (nombre < resultat) {
        console.log("plus grand");
        nombre = Number(prompt("Plus grand ! Essaie encore !"));
    } else if (nombre > resultat) {
        console.log("plus petit");
        nombre = Number(prompt("Plus petit ! Essaie encore !"));
    } else if (nombre === resultat) {
        console.log("c'est gagné !");
         alert("c'est gagné !");
         break;
    } 
}

if (nombre !== resultat) {
    alert("C'est perdu !");
}
// find out how to add new tries 

