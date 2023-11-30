// BOTONES
const btnGenero = document.querySelector('.btn_genero');
const btnOrdenar = document.querySelector('.btn_ordenar');
// Contenedores Menu
const menuGenero = document.getElementById('menu_genero')
const menuOrdenar = document.getElementById('menu_ordenar')


btnGenero.addEventListener('click', () => {
    if(menuGenero.classList.contains('menu_mostrar')) {
        menuGenero.classList.remove('menu_mostrar');
    }else {
        ocultarMenu();
        menuGenero.classList.add('menu_mostrar');
    }
})

btnOrdenar.addEventListener('click', () => {
    if(menuOrdenar.classList.contains('menu_mostrar')) {
        menuOrdenar.classList.remove('menu_mostrar');
    }else {
        ocultarMenu();
        menuOrdenar.classList.add('menu_mostrar');
    }
})


const ocultarMenu = () => {
    let menuVerTodo = document.getElementsByClassName('menu');
    for(let i=0; i<menuVerTodo.length; i++){
        menuVerTodo[i].classList.remove('menu_mostrar');
    }
}
