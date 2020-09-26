const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

function funkcja(){
    console.log('Twoja stara');
}

function funkcja2(){
    console.log('Twój stary');
}


btn1.addEventListener('click', funkcja);
btn2.addEventListener('click', funkcja2);
