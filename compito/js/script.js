/* const parola = prompt("Inserisci una parola");
const primaParte = [];

 for (let i = 0; i < Math.floor(parola.length / 2); i++) {
    primaParte.push(parola[i]);
}

 const secondaParte = [];

 for (let i = parola.length -1; i >= parola.length / 2; i--){
    secondaParte.push(parola[i]);
}
let nonPalindroma = false;

console.log(primaParte, secondaMetaRibaltata);


for (let i = 0; i < secondaParte.length; i++) {
    if (primaParte[i] != secondaParte[i]) {
        nonPalindroma = true;
    }
}

if (nonPalindroma == true) {
    alert("La parola non è palindroma");
} else {
    alert("La parola è palindroma");
} */

// --------------------------------------------------------------------------------------

/*
Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
Chiedere all'utente di inserire una parola

stampaPalindromicita'

se uguali
        stampa 'parola palindroma'
    altrimenti
        stampa 'parola NON palindroma'
fine se

funzione isPalindrom() {
    invertire la parola
    confrontarla con la parola originale
    se uguali
        return true
    altrimenti
        return false
    fine se
}
*/

const word = prompt('Dammi la parola da testare');

if (isPalindrom(word)) {
    console.log('palindroma');
} else {
    console.log('NON palindroma');
}

function isPalindrom(testWord) {


//metodo 1

/* const invertedWord = testWord.split('').reverse().join('');
if (testWord === invertedWord) {
    return true;
}
return false;
-------------------------------------------------

//metodo 2
let invertedWord = '';
    for (let i = testWord.length - 1; i >= 0; i--) {
        invertedWord = invertedWord + testWord[i];
    }

    if (testWord === invertedWord) {
        return true;
    }
    return false;
------------------------------------------------- */



//metodo 3
    for (let i = 0; i <= parseInt(testWord.length / 2); i++) {
        console.log(testWord[i], testWord[testWord.length - 1 - i]);
        if (testWord[i] !== testWord[testWord.length - 1 - i]) {
            return false;
        }
        return true;
    }
}

// PARI O DISPARI

let divisibility = prompt('Sara\' pari o dispari?').toLowerCase();
divisibility = divisibility === 'pari' ? 0 : 1;
const userNumber = parseInt(prompt('Dammi un numero tra 1 e 5 compresi'));
const computerNumber = getRandomInteger(1, 5);
if (isDivisible(userNumber + computerNumber, divisibility)) {
	console.log(userNumber, computerNumber, 'Hai vinto');
} else {
	console.log(userNumber, computerNumber, 'Hai perso');
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isDivisible(number, divisibility) {
	if ((divisibility === 0 && number % 2 === 0) || (divisibility === 1 && number % 2 !== 0)) {
		return true;
	}
	return false;
}