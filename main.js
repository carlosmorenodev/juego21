/* main.js */

const addCardButton = document.getElementById('addCard');
const cardElement = document.getElementById('card');
const modalElement = document.getElementById('modal');
const modalMessageElement = document.getElementById('modalMsg');
const closeModalButton = document.getElementById('closeModal');
const resetGameButton = document.getElementById('resetGame');
let puntuationElement = document.getElementById('puntuation');

let count = 0;
const cardList = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

puntuationElement.innerHTML = count;

/* Function to display the card with animation */
function displayCard(turn) {
    cardElement.innerHTML = turn;
    cardElement.classList.remove('show'); /* Reset animation */
    void cardElement.offsetWidth; /* Trigger reflow to restart animation */
    cardElement.classList.add('show'); /* Start animation */
}


/* Add card functionality */
addCardButton.addEventListener("click", () => {
    let turn = cardList[Math.floor(Math.random() * cardList.length)];
    let value;

    switch (turn) {
        case 'A': value = 1; break;
        case '2': value = 2; break;
        case '3': value = 3; break;
        case '4': value = 4; break;
        case '5': value = 5; break;
        case '6': value = 6; break;
        case '7': value = 7; break;
        case '8': value = 8; break;
        case '9': value = 9; break;
        default: value = 10; /* For 10, J, Q, K */
    }

    count += value;
    puntuationElement.innerHTML = count;
    displayCard(turn);  /* Display card with animation */

    const limit = 21;

    if (count === limit) {
        modalElement.classList.add('modal-active');
        modalElement.style.backgroundColor = "green";
        modalMessageElement.innerHTML = "¡Enhorabuena! Has ganado :)";
        addCardButton.disabled = true;
    } else if (count > limit) {
        modalElement.classList.add('modal-active');
        modalElement.style.backgroundColor = "red";
        modalMessageElement.innerHTML = "¡Lo siento! Has perdido :(";
        addCardButton.disabled = true;
    }
});

/* Close modal */
closeModalButton.addEventListener("click", () => {
    modalElement.classList.remove('modal-active');
    resetGameButton.style.visibility = "visible";
});

/* Reset game */
resetGameButton.addEventListener("click", () => {
    count = 0;
    puntuationElement.innerHTML = 0;
    cardElement.innerHTML = "";
    cardElement.classList.remove('show'); /* Ensure card is hidden on reset */
    addCardButton.disabled = false;
    resetGameButton.style.visibility = "hidden";
});