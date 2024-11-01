// script.js
let isOverlayVisible = true;

function toggleOverlay() {
    const overlay = document.querySelector('.overlay');

    if (isOverlayVisible) {
        overlay.style.transform = 'translateX(100%)'; // Move para a direita
    } else {
        overlay.style.transform = 'translateX(0)'; // Volta para a esquerda
    }
    isOverlayVisible = !isOverlayVisible;
}