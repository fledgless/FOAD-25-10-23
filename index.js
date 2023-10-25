// Générer un nombre entre 1 et 100 aléatoirement.
// 2. Demander de saisir un nombre entre 1 et 100.
// 3. Dire si « plus grand », « plus petit » ou « c’est gagné ! »

function random(min, max) {
    return Math.random() * (max - min) + min;
  }

let resultat = Math.round(random(1, 100))
console.log(resultat);

let number = prompt("veuillez saisir un chiffre entre 1 et 100 :")

if (number < resultat) {
    console.log("plus petit")
} else if (number > resultat) {
    console.log("plus grand")
} else if (number === resultat) {
    console.log("c'est gagné !")
}

if (number < resultat) {
    let newNumber = prompt("essaie encore (cherche plus grand)")
} else if (number > resultat) {
    let newNumber = prompt ("essaie encore (cherche plus petit)")
} else if (number === resultat) {
    MessageEvent("you win!")
}

if (newNumber < resultat) {
    console.log("plus petit")
} else if (newNnumber > resultat) {
    console.log("plus grand")
} else if (newNumber === resultat) {
    console.log("c'est gagné !")
}

console.log(number);