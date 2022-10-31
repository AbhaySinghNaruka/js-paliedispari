const parolaUtente = prompt("Inserisci una parola");
const primaMeta = [];

 for (let i = 0; i < Math.floor(parolaUtente.length / 2); i++) {
    primaMeta.push(parolaUtente[i]);
}

 const secondaMetaRibaltata = [];

 for (let i = parolaUtente.length -1; i >= parolaUtente.length / 2; i--){
    secondaMetaRibaltata.push(parolaUtente[i]);
}
let hoIncontratoLettereDiverse = false;

console.log(primaMeta, secondaMetaRibaltata);


for (let i = 0; i < secondaMetaRibaltata.length; i++) {
    if (primaMeta[i] != secondaMetaRibaltata[i]) {
        hoIncontratoLettereDiverse = true;
    }
}

if (hoIncontratoLettereDiverse == true) {
    alert("La parola non è palindroma");
} else {
    alert("La parola è palindroma");
}