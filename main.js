/* main.js */

const addCardButton = document.getElementById('addCard');
const cardElement = document.getElementById('card');
const cardValueElement = document.getElementById('cardValue');
const modalOverlay = document.getElementById('modalOverlay');
const modalElement = document.getElementById('modal');
const modalMessageElement = document.getElementById('modalMsg');
const modalIconElement = document.getElementById('modalIcon');
const closeModalButton = document.getElementById('closeModal');
const resetGameButton = document.getElementById('resetGame');
const puntuationElement = document.getElementById('puntuation');

// Inicializar estado
let count = 0;
const cardList = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = ['spade', 'heart', 'club', 'diamond'];

puntuationElement.innerHTML = count;

/* Función para mostrar la carta con animación 3D */
function displayCard(turn) {
    // Determinar palo aleatorio para darle estilo visual
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const isRed = suit === 'heart' || suit === 'diamond';
    const suitIcon = `<i class="fa-solid fa-suit-${suit}"></i>`;
    
    // Configurar el valor de la parte posterior de la carta
    cardValueElement.innerHTML = `${turn} <br> <span style="font-size:0.5em">${suitIcon}</span>`;
    if (isRed) {
        cardValueElement.classList.add('red-suit');
    } else {
        cardValueElement.classList.remove('red-suit');
    }

    // Reiniciar el estado de la animación de la carta
    cardElement.classList.remove('flipped');
    cardElement.classList.remove('pop-in');
    
    // Forzar un reflow para reiniciar la animación
    void cardElement.offsetWidth; 
    
    // Reproducir animación de aparición y luego voltear
    cardElement.classList.add('pop-in');
    setTimeout(() => {
        cardElement.classList.add('flipped');
    }, 100);
}

/* Actualizar puntuación con animación */
function updateScore(newScore) {
    count = newScore;
    puntuationElement.innerHTML = count;
    
    // Efecto de salto en la puntuación
    puntuationElement.classList.remove('pop');
    void puntuationElement.offsetWidth;
    puntuationElement.classList.add('pop');
    
    setTimeout(() => {
        puntuationElement.classList.remove('pop');
    }, 300);
}

/* Función para abrir el modal */
function showModal(isWin) {
    const limit = 21;
    
    // Limpiar clases anteriores
    modalElement.classList.remove('win', 'lose');
    
    if (isWin) {
        modalElement.classList.add('win');
        modalIconElement.innerHTML = '<i class="fa-solid fa-trophy"></i>';
        modalMessageElement.innerHTML = "¡Enhorabuena!<br>Has ganado";
    } else {
        modalElement.classList.add('lose');
        modalIconElement.innerHTML = '<i class="fa-solid fa-face-frown"></i>';
        modalMessageElement.innerHTML = "¡Lo siento!<br>Has perdido";
    }
    
    // Retrasar el modal para permitir leer la carta
    setTimeout(() => {
        modalOverlay.classList.add('active');
        addCardButton.disabled = true;
    }, 800);
}

/* Funcionalidad de añadir carta */
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
        default: value = 10; /* Para 10, J, Q, K */
    }

    updateScore(count + value);
    displayCard(turn);

    const limit = 21;

    if (count === limit) {
        showModal(true);
    } else if (count > limit) {
        showModal(false);
    }
});

/* Cerrar modal */
closeModalButton.addEventListener("click", () => {
    modalOverlay.classList.remove('active');
    resetGameButton.classList.remove('hidden');
    addCardButton.classList.add('hidden');
});

/* Reiniciar juego */
resetGameButton.addEventListener("click", () => {
    updateScore(0);
    
    // Voltear la carta de nuevo
    cardElement.classList.remove('flipped');
    
    setTimeout(() => {
        cardValueElement.innerHTML = "";
    }, 400); // Esperar al volteo para ocultar el valor

    addCardButton.disabled = false;
    addCardButton.classList.remove('hidden');
    resetGameButton.classList.add('hidden');
});