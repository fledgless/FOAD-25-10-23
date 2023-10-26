// fonction chiffre aléatoire
let nbmin = Number(prompt("Choisissez un nombre minimum :"));
let nbmax = Number(prompt("Choisissez un nombre maximum :"));

function random(min, max) {
    return Math.random() * (max - min) + min;
  }

let resultat = Math.round(random(nbmin, nbmax));
console.log(resultat);

// variables pour choix du nombre d'essais
let i;
let essaisMax = Number(prompt("En combien d'essais voulez-vous trouvez la solution ?"));

// prompt sélection de chiffre
let nombre = Number(prompt(`Veuillez saisir un nombre entre ${nbmin} et ${nbmax} :`));

// prompt en cas de nombres invalides
if (nombre < nbmin, nombre > nbmax) {
    let nombre = Number(prompt("Nombre invalide, veuillez réessayer :"));
}

// resultats + nouveaux essaies
for (i = 2; i <= essaisMax; i++) {
    if (nombre < resultat) {
        console.log("plus grand");
        nombre = Number(prompt("Plus grand ! Essaie encore !"));
    } else if (nombre > resultat) {
        console.log("plus petit");
        nombre = Number(prompt("Plus petit ! Essaie encore !"));
    } else if (nombre === resultat) {
        console.log("c'est gagné !");
         alert("C'est gagné !");
         break;
    } 
}

if (nombre !== resultat) {
    alert("C'est perdu !");
}


