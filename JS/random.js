const apiKey = 'api_key=56417c7e744d0a838ddfae92f6f688a5'
const URL_BASE = 'https://api.themoviedb.org/3/movie/popular?'
const languageEs = '&language=es-MX'
const btnRandom = document.getElementById('btnRandom');
const movieInfo = document.getElementById('movies');
const pagina = 1;

function obtenerPaginaRandom() {
    return Math.floor(Math.random() * 500) + 1;
}

function obtenerPeliculaRandom(pagina) {
    return fetch(`${URL_BASE}${apiKey}${languageEs}&page=${pagina}`)
        .then(response => response.json())
        .then(data => {
            const indexRandom = Math.floor(Math.random() * data.results.length);
            return data.results[indexRandom];
        });
}

btnRandom.addEventListener('click', () => {
    const rpaginaRandom = obtenerPaginaRandom();

    obtenerPeliculaRandom(rpaginaRandom)
        .then(pelicula => {
            movieInfo.innerHTML = `
                <div class="pelicula2">
                    <h2 class="titulo2">${pelicula.title}</h2>
                    <img class="poster2" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}" />
                    <h3 class="titulo2">Descripcion:</h3>
                    <p class="description">${pelicula.overview}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error al obtener la película', error);
            movieInfo.innerHTML = 'Error al cargar la película.';
        });
});