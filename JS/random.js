const apiKey = 'api_key=56417c7e744d0a838ddfae92f6f688a5'
const URL_BASE = 'https://api.themoviedb.org/3/movie/popular?'
const languageEs = '&language=es-MX'
const randomMovieButton = document.getElementById('btnRandom');
const movieInfo = document.getElementById('movies');

randomMovieButton.addEventListener('click', () => {
fetch(`${URL_BASE}${apiKey}${languageEs}`)
.then(response => response.json())
.then(data => {
const indexRandom = Math.floor(Math.random() * data.results.length);
const movieRandom = data.results[indexRandom];

movieInfo.innerHTML = `
        <div class="pelicula2">
            <h2 class="titulo2">${movieRandom.title}</h2>
            <img class="poster2" src="https://image.tmdb.org/t/p/w500/${movieRandom.poster_path}" alt="${movieRandom.title}" />
            <p class="description">${movieRandom.overview}</p>
        </div>
    `;
})
.catch(error => {
console.error('Error al obtener la película', error);
movieInfo.innerHTML = 'Error al cargar la película.';
});
});