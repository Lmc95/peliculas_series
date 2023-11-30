import { peliculas, series } from "./movies.js";

// MENU MOBILE - var
const menuMobile = document.querySelector('.menu_mobile')
const btnMenu = document.querySelector('.menu_btn');
let contadorMenu = 0;

// CARRUSEL PELICULAS Y SERIES - var
const carrusel = document.querySelector('.carrusel');
const btnIzq = document.querySelector('.btn_izq');
const btnDer = document.querySelector('.btn_der');


//EVENTOS --
// Mostrar menu
btnMenu.addEventListener('click', () => {
    contadorMenu++;
    animacionMenu();
})

// Scroll de carrusel con botones
btnIzq.addEventListener('click', () => {
    carrusel.scrollLeft -= carrusel.clientWidth * 1;
})
btnDer.addEventListener('click', () => {
    carrusel.scrollLeft += carrusel.clientWidth * 1;
})

// FUNCIONES --

// MENU: Abrir y cerrar menu
const animacionMenu = () => {
    if (contadorMenu % 2 === 0) {
        // Cerrar menu
        menuMobile.classList.remove('abrir_menu')
    } else {
        // Abrir menu
        menuMobile.classList.add('abrir_menu')
    }
}



