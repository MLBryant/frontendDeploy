const randomBtn = document.querySelector('#randombtn');

const links = document.querySelectorAll('a');

const reccomend = event => {
    event.preventDefault();
    const arr = ["Rotolo's Craft & Crust", "Plucker's Wing Bar", "Uno Dos Tacos", "Southfin Southern Poké", "Crave Hot Dogs & BBQ", "Mid Tap"]
    let pick = Math.floor(Math.random() * 6);
    console.log(pick);

    for (i = 0; i < links.length; i++) {
        if (arr[pick] === links[i].textContent) {
            console.log(links[i]);
            window.open(links[i].href);
        }
    }


}

randomBtn.addEventListener('click', reccomend);