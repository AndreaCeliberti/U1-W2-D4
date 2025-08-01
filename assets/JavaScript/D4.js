/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  const result = l1 * l2;
  return result;
};
const totale = area(6, 4);

console.log("area rettangolo", totale);

/* 
D4.js:11 area rettangolo 24

*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (p1, p2) {
  const result = p1 + p2;

  if (p1 === p2) {
    return result * 3;
  }

  return result;
};

const crazy = crazySum(7, 5);
const crazyM = crazySum(5, 5);

console.log("valore parametri diversi", crazy);

console.log("valore parametri uguali", crazyM);
/* 

D4.js:37 valore parametri diversi 12

D4.js:38 valore parametri uguali 30


*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n1) {
  const result = n1 / 19;

  if (n1 > 19) {
    return result * 3;
  }

  return result;
};

const diffUp = crazyDiff(27);
const diffUnder = crazyDiff(6);

console.log("valore parametri diversi", diffUp);

console.log("valore parametri uguali", diffUnder);

/* 
D4.js:67 valore parametri diversi 4.2631578947368425
D4.js:69 valore parametri uguali 0.3157894736842105
 */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (bond1) {
  if ((bond1 > 20 && bond1 <= 100) || bond1 === 400) {
    return result;
  }
};
const result = true;
const valore = boundary(400);

console.log("valore bound 400", valore);

/*
valore bound 10 undefined
 valore bound 66 true
 valore bound 100 true
valore bound 110 undefined
valore bound 400 true
 */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (h1) {
  if ((h1 % 3 && h1 % 7) === 0) {
    return check;
  }
};
const check = true;
const differenza = check3and7(21);

console.log("valore check", differenza);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
