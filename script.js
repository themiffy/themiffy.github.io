function alert1(){
    alert('Вы нажали на кнопку');
    console.log('Вызвана функция alert1');
}

count = 1
//Бля, сюда тоже нельзя смотреть, уходи

function calculate(){
    song_quantity = document.getElementById('song_quantity');
    weight = document.getElementById('weight');
    //strengh = document.getElementById('input_strengh');
    //cost = document.getElementById('input_cost');
    //result.innerHTML = (volume.value * strengh.value / cost.value) * 100

    let song_length = 2.5 // minutes on average
    let t_half_life = 10 // min per min
    let min_dose = weight.value/60 // one song per 60 kg (average human)
    let current_dose = song_length * song_quantity.value * t_half_life
    let t = 0
    while (current_dose >= min_dose){
        current_dose /= 2
        t += t_half_life
    }
    result.innerHTML = 'Данная сессия прослушиваня Ямобура принесла вам ' + t + ' минут умственной отсталости.\n Подписка стоит всего 50 рублей!'
}