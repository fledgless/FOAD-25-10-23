// variable random

let numMystere = Math.floor(Math.random() * 100);
// deboguage
console.log(numMystere);

let essaisMax = parseInt(prompt("En combien d'essais voulez-vous trouvez la solution ?"));
let nbreSaisi = parseInt(prompt("Veuillez saisir un nombre entre 1 et 100"));
// deboguage
// console.log(nbreSaisi, typeof nbreSaisi);
let responseSaisie = false;
let nbreCoup = 0;
// notre logique
while (responseSaisie === false, nbreCoup <= essaisMax) {
    nbreCoup++;
    // let nbreSaisi = parseInt(prompt("Veuillez saisir un nombre entre 1 et 100"));
    if (nbreSaisi < numMystere) {
         nbreSaisi = parseInt(prompt("Veuillez saisir un nombre plus grand"));
    } else if (nbreSaisi > numMystere) {
        nbreSaisi = parseInt(prompt("Veuillez saisir un nombre plus petit"));
    } else if (nbreCoups === essaisMax) {
        alert("Vous avez perdu!");
    } else {
        responseSaisie = true;
        alert(`Bravo, vous êtes doué(e)! Vous avez trouvé en : ${nbreCoup} coup${nbreCoup > 1 ? "s" : ""}`)
    }
}
