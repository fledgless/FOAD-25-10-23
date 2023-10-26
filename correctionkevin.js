// variable random
let numMystere = Math.floor(Math.random() * 100);
// let numMystere = 10;
// deboguage
// console.log(numMystere, typeof numMystere);

// nombre de tentatives max fixé par le joueur
let nbreCoupMax = parseInt(
  prompt("En combien de tentatives max souhaitez-vous deviner le nombre ?")
);

// saisi du joueur
let nbreSaisi = parseInt(prompt("Veuillez saisir un nombre entre 1 et 100"));
// deboguage
// console.log(nbreSaisi, typeof nbreSaisi);
let responseSaisie = false; // boolean
let nbreCoup = 0;

// notre logique
while (responseSaisie === false) {
  nbreCoup++;
  if (nbreCoup === nbreCoupMax && nbreSaisi !== numMystere) {
    alert(
      `Vous avez dépassé ${
        nbreCoupMax > 1 ? "les" : "la"
      } ${nbreCoupMax} tentative${nbreCoupMax > 1 ? "s" : ""} autorisée${
        nbreCoupMax > 1 ? "s" : ""
      }. Vous avez donc perdu. Le nombre mystère était ${numMystere}`
    );
    break;
  }
  // si le nombre de tentatives max atteint on sort de la boucle et on affiche un message comme quoi le joueur a perdu

  if (nbreSaisi < numMystere) {
    nbreSaisi = parseInt(prompt("Veuillez saisir un nombre plus grand!"));
    // nbreCoup = nbreCoup + 1;
    // nbreCoup++
  } else if (nbreSaisi > numMystere) {
    nbreSaisi = parseInt(prompt("Veuillez saisir un nombre plus petit!"));
    // nbreCoup++
  } else {
    responseSaisie = !responseSaisie; // inversion boolean
    // alert("bravo vous avez trouvé en : " + nbreCoup + " coup(s)");
    alert(
      `Bravo !! Vous avez trouvé le nombre mystère ${numMystere} en : ${nbreCoup} coup${
        nbreCoup > 1 ? "s" : ""
      }` // backtype + affichage du "s" en conditionnel ( ternaire )
      //   if (nbreCoup > 1) {
      //     "s"
      //   } else {
      //     ""
      //   }
    );
  }
}
