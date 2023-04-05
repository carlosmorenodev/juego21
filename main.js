const addCard = document.getElementById('addCard');
const card = document.getElementById('card');
const modal = document.getElementById('modal');
const modalMsg = document.getElementById('modalMsg');
const closeModal = document.getElementById('closeModal');
const resetGame = document.getElementById('resetGame');
let puntuation = document.getElementById('puntuation');

let count = 0;
const cardlist = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

puntuation.innerHTML = count;

/* añadir carta */

addCard.addEventListener("click", () => {
    let turn = cardlist[Math.floor(Math.random() * cardlist.length)];
    puntuation.innerHTML = count;
    card.innerHTML = turn;
    let valor;

    switch (turn) {
        case 'A':
            valor = 1;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case '2':
            valor = 2;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case '3':
            valor = 3;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case '4':
            valor = 4;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case '5':
            valor = 5;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case '6':
            valor = 6;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case '7':
            valor = 7;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case '8':
            valor = 8;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case '9':
            valor = 9;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case '10':
            valor = 10;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case 'J':
            valor = 10;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case 'Q':
            valor = 10;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
        case 'K':
            valor = 10;
            count = count + valor;
            puntuation.innerHTML = count;
            card.innerHTML = turn;
            break;
    }

const limite = 21;

if (count == 21) {
    modal.classList.add('modal-active');
    modal.style.backgroundColor = "green";
    modalMsg.innerHTML = "¡Enhorabuena! Has ganado :)";
    addCard.disabled = true;
} if (count > 21) {
    modal.classList.add('modal-active');
    modal.style.backgroundColor = "red";
    modalMsg.innerHTML = "¡Lo siento! Has perdido :(";
    addCard.disabled = true;
}

/* Cerrar modal */
closeModal.addEventListener("click", () => {
    modal.classList.remove('modal-active');
    resetGame.style.display = "block";
})

/* REINICIAR JUEGO */

resetGame.addEventListener("click", () => {
    count = 0;
    puntuation.innerHTML = 0;
    card.innerHTML = "";
    addCard.disabled = false;
})





    /* console.log(cardlist[Math.floor(Math.random() * cardlist.length)]); */
    console.log(`Contador: ${count}`);
    console.log(turn);
})
