const btnList = document.getElementsByClassName('info-btn');
let titlePlace = document.getElementById('movie-title');
let  imagePlace = document.getElementById('info-img')

Array.from(btnList).forEach((btn) => {
    btn.addEventListener('click', setModal);
})

function setModal() {
    switch (this.getAttribute('data-film')) {
        case 'hist-cruz':
            titlePlace.innerHTML = 'Histórias Cruzadas';
            addClass(imagePlace, 'hist-cruz')
            remove(imagePlace, 'hist-cruz')
            break;
        case 'pant':
            titlePlace.innerHTML = 'As Panteras';
            addClass(imagePlace, 'pant')
            break;
        case 'pant-19':
            titlePlace.innerHTML = 'As Panteras-2019';
            addClass(imagePlace, 'pant-19')
            break;
        case 'cap-marv':
            titlePlace.innerHTML = 'Capitã Marvel';
            addClass(imagePlace, 'cap-marv')
            break;
        case 'extr-fut':
            titlePlace.innerHTML = 'Extreminador do Futuro';
            addClass(imagePlace, 'extr-fut')
            break;
        case 'jog-voraz':
            titlePlace.innerHTML = 'Jogos Vorazes';
            addClass(imagePlace, 'jog-voraz')
            break;
        case 'mul-mar':
            titlePlace.innerHTML = 'Mulher Maravilha';
            addClass(imagePlace, 'mul-mar')
            break;
        case 'ond-est':
            titlePlace.innerHTML = 'Onde Está Segunda?';
            addClass(imagePlace, 'ond-est')
            break;
        case 'amelie':
            titlePlace.innerHTML = 'O Fabuloso Destino de Amelie Poulain';
            addClass(imagePlace, 'amelie')
            break;
        case 'kill-bill':
            titlePlace.innerHTML = 'Kill Bill';
            addClass(imagePlace, 'kill-bill')
            break;
    }
}


