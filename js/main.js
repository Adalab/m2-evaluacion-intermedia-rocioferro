'use strict';


let counter = document.querySelector('.counter');
const input = document.querySelector('.input'); 
const btn = document.querySelector('.btn');
const clue = document.querySelector('.paragraph');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

const randomNum = getRandomNumber(100);


function readNumber (){
    const yourNumber = input.value;
    console.log(yourNumber); 
    counter.innerHTML= parseInt(counter.innerHTML) + 1
    console.log(randomNum);
    if (yourNumber<randomNum) {
        clue.innerHTML='demasiado bajo';
    }
    else if (yourNumber>randomNum) {
        clue.innerHTML='demasiado alto';
    }
    else {
        clue.innerHTML='¡HAS GANADO, CAMPEONA!'
    }

}


btn.addEventListener('click',readNumber)