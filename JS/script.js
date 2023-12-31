let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')

btnSiguiente.addEventListener('click', () => {
    if (pagina < 1000) {
        pagina += 1;
        cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1;
        cargarPeliculas();
    }
});


const cargarPeliculas = async () => {
    try {

        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=56417c7e744d0a838ddfae92f6f688a5&language=auto&page=${pagina}`);

        console.log(respuesta)

        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let peliculas = '';

            datos.results.forEach(pelicula => {
                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h3 class="titulo">${pelicula.title}</h3>
                        <p>${pelicula.release_date}</p>
                    </div>
                `
            });

            document.getElementById('contenedor').innerHTML = peliculas
        } else if (respuesta.status === 401) {
            console.log('Hubo un error al obtener los datos, intenta verificando tu api key')
        } else if (respuesta.status === 404) {
            console.log('La pelicula que buscas no existe')
        } else {
            console.log('Hubo un erro no identificado')
        }

    } catch (error) {
        console.log(error)
    }


}



cargarPeliculas();