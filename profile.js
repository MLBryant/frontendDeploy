// const favColor = event => {
//     event.preventDefault();
//     alert('BLUE!')
// }

// const favPlace = event => {
//     event.preventDefault();
//     alert('THE COLOSSEUM!')
// }

// const favRitual = event => {
//     event.preventDefault();
//     alert('WASHING MY HANDS WITH DIRT BEFORE BATTLE!')
// }

// document.querySelector('#color').addEventListener('click', favColor);

// document.querySelector('#place').addEventListener('click', favPlace);

// document.querySelector('#ritual').addEventListener('click', favRitual);

const favBtns = document.querySelectorAll('button')

const favAlert = event => {
    event.preventDefault();
    if (event.target.id === 'color') {
        alert('BLUE!');
    } else if (event.target.id === 'place') {
        alert('THE COLISEUM!');
    } else if (event.target.id === 'ritual') {
        alert('WASHING MY HANDS WITH DIRT BEFORE BATTLE!');
    }   
}

for (i = 0; i < favBtns.length; i++) {
favBtns[i].addEventListener('click', favAlert);
}