function tocaSomCoin () {
    document.querySelector('#som__coin').play();
}

function tocaSomDenied () {
    document.querySelector('#som__denied').play();
}

let contador = 0
const listaNitos = document.querySelectorAll('.nitos');
const listaCash = document.querySelectorAll('.cash');

while (contador < listaCash.length) {
    listaCash[contador].onclick = tocaSomCoin;
    listaNitos[contador].onclick = tocaSomDenied;

    contador = contador + 1
}
