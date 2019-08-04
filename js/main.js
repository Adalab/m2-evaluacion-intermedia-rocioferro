'use strict';


let counter = document.querySelector('.counter');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const clue = document.querySelector('.paragraph');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNum = getRandomNumber(100);


let countNumber = 0; 
  function addCounter () {
    countNumber += 1;
    counter.innerHTML = countNumber; 
 }
 
function readNumber() {
    const yourNumber = input.value;
    addCounter();
    console.log(randomNum);
    if (yourNumber < randomNum) {
        clue.innerHTML = 'demasiado bajo';
    }
    else if (yourNumber > randomNum) {
        clue.innerHTML = 'demasiado alto';
    }
    else {
        clue.innerHTML = '¡HAS GANADO, CAMPEONA!'
    }

}


btn.addEventListener('click', readNumber)