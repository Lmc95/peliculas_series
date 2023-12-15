// MENU MOBILE - var
const menuMobile = document.querySelector('.menu_mobile')
const btnMenu = document.querySelector('.menu_btn');
let contadorMenu = 0;

// MENU: Abrir y cerrar menu

//EVENTOS --
// Mostrar menu
btnMenu.addEventListener('click', () => {
    contadorMenu++;
    animacionMenu();
})

const animacionMenu = () => {
    if (contadorMenu % 2 === 0) {
        // Cerrar menu
        menuMobile.classList.remove('abrir_menu')
    } else {
        // Abrir menu
        menuMobile.classList.add('abrir_menu')
    }
}
//--------------------------------------------//

// VARIABLES DE (URL)
const apiUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'f7e00525b6bd80efe6ac05abbd2a99c6';
const lenguajeEs = '&language=es-MX';
const imagen = 'https://image.tmdb.org/t/p/w300';
const allMovies = 'movie/now_playing';
const popular = 'movie/popular';
const topRated = 'movie/top_rated';
const upcoming = 'movie/upcoming';

// VARIABLES CONTENEDORES/BOTONES
// contenedores
const categoriasContenedor = document.querySelectorAll('.categoriaPelicula');

// LLAMADO A LA API "TMDB" SOLO PELICULAS
const mostrarPeliculas = (cat, contenedor) => {
    fetch(`${apiUrl}${cat}?api_key=${apiKey}${lenguajeEs}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            data.results.forEach(p => {
                // CREACION DE CARTA PELICULAS POR CADA ELEMENTO EN EL ARRAY
                crearCarta(p, contenedor);
            });
        });
}

const crearCarta = (p, contenedor) => {
    // carta
    let carta = document.createElement('div');
    carta.classList.add('carta');
    contenedor.appendChild(carta);
    // imagen
    let portada = document.createElement('img');
    portada.classList.add('portada');
    portada.src = imagen + p.poster_path;
    carta.appendChild(portada);
    // titulo
    let titulo = document.createElement('h2');
    titulo.classList.add('titulo');
    titulo.innerHTML = p.title;
    carta.appendChild(titulo);
}

categoriasContenedor.forEach(contenedor => {
    switch (contenedor.classList[1]) {
        case "todas":
            // se pasa como parametro 1 la categoria y parametro 2 el contenedor
            mostrarPeliculas(allMovies, contenedor.querySelector('.contenedor'));
            break;
        case "populares":
            mostrarPeliculas(popular, contenedor.querySelector('.contenedor'));
            break;
        case "top":
            mostrarPeliculas(topRated, contenedor.querySelector('.contenedor'));
            break;
        case "proximas":
            mostrarPeliculas(upcoming, contenedor.querySelector('.contenedor'));
            break;
        default:
            alert("BOTON INVALIDO")
            break;
    }
});

// CARRUSEL
// Función para manejar el clic de los botones
function manejoDeClick(contenedor, direccion) {
    // Realizar desplazamiento hacia la izquierda o derecha según la dirección
    if (direccion === 'izquierda') {
        contenedor.scrollLeft -= contenedor.clientWidth;
    } else if (direccion === 'derecha') {
        contenedor.scrollLeft += contenedor.clientWidth;
    }
}

// Asociar eventos de clic a la función manejoDeClick para los botones izquierdo y derecho
document.querySelectorAll('.categoriaPelicula').forEach(categoria => {
    const contenedor = categoria.querySelector('.contenedor');
    const btnIzq = categoria.querySelector('.btn_izq');
    const btnDer = categoria.querySelector('.btn_der');

    btnIzq.addEventListener('click', () => {
        manejoDeClick(contenedor, 'izquierda');
    });

    btnDer.addEventListener('click', () => {
        manejoDeClick(contenedor, 'derecha');
    });
});
