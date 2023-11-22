const menuMobile = document.querySelector('.menu_mobile')
const btnMenu = document.querySelector('.menu_btn');

let contadorMenu = 0;
btnMenu.addEventListener('click', () => {
    contadorMenu++;
    animacionMenu();
})


// Abrir y cerrar menu
const animacionMenu = () => {
    if(contadorMenu % 2 === 0){
        // Cerrar menu
        menuMobile.classList.remove('abrir_menu')
    }else {
        // Abrir menu
        menuMobile.classList.add('abrir_menu')
    }
}