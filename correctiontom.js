// Demande a l'utilisateur un nombre
let nombreDeCoups = prompt("Choisissez le nombre de coups :");
nombreDeCoups = parseInt(nombreDeCoups);
let limiteInferieure = prompt(
  "Choisissez la limite inférieure (par exemple 1) :"
);
limiteInferieure = parseInt(limiteInferieure);
let limiteSuperieure = prompt(
  "Choisissez la limite supérieure (par exemple 100) :"
);
limiteSuperieure = parseInt(limiteSuperieure);
const nombreAleatoire =
  Math.floor(Math.random() * (limiteSuperieure - limiteInferieure + 1)) +
  limiteInferieure;
// console.log(nombreAleatoire);
let coup = 0;
let gagne = false;
while (coup < nombreDeCoups) {
  coup++;
  let nombreSaisi = prompt(
    `Coup ${coup}/${nombreDeCoups}. Devinez un nombre entre ${limiteInferieure} et ${limiteSuperieure} :`
  );
  nombreSaisi = parseInt(nombreSaisi);
  if (nombreSaisi > limiteSuperieure) {
    alert("Vous avez dépasser la limite supérieur !");
  }
  if (nombreSaisi < nombreAleatoire) {
    alert("Plus grand !");
  } else if (nombreSaisi > nombreAleatoire) {
    alert("Plus petit !");
  } else {
    gagne = true;
    break;
  }
}
if (gagne) {
  alert(
    `C'est gagné ! Le nombre était ${nombreAleatoire}, vous avez trouvé en ${coup} coup${
      coup > 1 ? "s" : ""
    }.`
  );
} else {
  alert(`Dommage, le nombre était ${nombreAleatoire}.`);
}
