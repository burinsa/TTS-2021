'use strict';

let buttonWrite = document.querySelector('.button-write');
let socialButtonList = document.querySelector('.social-button-list'); 

buttonWrite.addEventListener('click', () => {
    
    if(buttonWrite.classList.contains('active')) {
        socialButtonList.style.display = 'none';
    } else {
        socialButtonList.style.display = 'block';
    }
    buttonWrite.classList.toggle('active');
})