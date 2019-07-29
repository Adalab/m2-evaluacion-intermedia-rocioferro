'use strict';

// Elementos
const counter = document.querySelector('.counter');
const input = document.querySelector('.input'); 
const btn = document.querySelector('.btn');
const clue = document.querySelector('.paragraph');




// Función
function readNumber (){
    const value = input.value;
    return console.log(value); 
}








// Listener
btn.addEventListener('click',readNumber)