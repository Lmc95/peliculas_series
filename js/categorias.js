import {
    apiUrl,
    apiKey,
    lenguajeEs,
    imagen,
    allMovies,
    popular,
    topRated,
    upcoming,
} from './app.js';

// Se obtiene el parametro del href que se presiono en 'index.html' y asi poder cargar dicha categoria en 'ver_todo.html'
const urlParametro = new URLSearchParams(window.location.search);
const parametroCategoria = urlParametro.get('categoria');
const tituloCategoria = document.querySelector('.titulo_categoria'); 
const contenedorPelicula = document.querySelector('.contenedor_peliculas');


const categoriaSeleccionada = (c) => {
    fetch(`${apiUrl}${c}?api_key=${apiKey}${lenguajeEs}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })

        .then(data => {
            console.log('_______________________________')
            console.log(data);
            console.log('_______________________________')

            data.results.forEach(e => {
                // CREACION DE CARTA PELICULAS POR CADA ELEMENTO EN EL ARRAY
                crearCartaPelicula(e);
            });
            
        });
}
console.log('EJECUTANDO API.')
console.log('SE EJECUTO CORRECTAMENTE.')

tituloCategoria.innerHTML = '';
switch (parametroCategoria) {
    case 'todas':
        console.log('Categorias: TODAS');
        tituloCategoria.innerHTML = 'PELICULAS'
        categoriaSeleccionada(allMovies);
        break;
    case 'popular':
        console.log('Categoria: POPULAR');
        tituloCategoria.innerHTML = 'POPULARES'
        categoriaSeleccionada(popular);
        break;
    case 'top':
        console.log('Categoria: TOP');
        tituloCategoria.innerHTML = 'TOP'
        categoriaSeleccionada(topRated);
        break;
    case 'proximas':
        console.log('Categoria: PROXIMAMENTE');
        tituloCategoria.innerHTML = 'PROXIMAMENTE'
        categoriaSeleccionada(upcoming);
        break;
    default:
        break;
}

const crearCartaPelicula = (p) => {
    // carta
    let carta = document.createElement('div');
    carta.classList.add('carta');
    contenedorPelicula.appendChild(carta);
    // imagen
    let portada = document.createElement('img');
    portada.classList.add('portada');
    portada.src = imagen + p.poster_path;
    carta.appendChild(portada);
    // contenido
    let contCarta = document.createElement('div');
    contCarta.classList.add('cont_carta')
    contCarta.innerHTML = `
        <div class="opacidad_bg"></div>
        <h1 class="titulo">${p.title}</h1>
        <button id="btn_play">PLAY</button>
        `
    carta.appendChild(contCarta);
}