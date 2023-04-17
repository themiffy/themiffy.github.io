function alert1(){
    alert('Вы нажали на кнопку');
    console.log('Вызвана функция alert1');
}

count = 1


function calculate(){
    result = document.getElementById('result');
    volume = document.getElementById('input_volume');
    strengh = document.getElementById('input_strengh');

    result.innerHTML = volume.value * strengh.value
}