const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const alert1 = document.querySelector('#alert');

function funkcja(){
    console.log('Twoja stara');
}

function funkcja2(){
    console.log('Twój stary');
    $('#alert').toast('show');
}


btn1.addEventListener('click', funkcja);
btn2.addEventListener('click', funkcja2);



