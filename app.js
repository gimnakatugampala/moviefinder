//Init Movies
const movie = new Movies;
//Init UI
const ui = new UI;

//search input
const searchMovie = document.getElementById('searchMovies');

searchMovie.addEventListener('keyup',(e) =>{
    const userInput = e.target.value;
    if(userInput !== ''){
        
        movie.getMovies(userInput)
        .then(data => {
            console.log(data.movie)
            if(data.movie.Error === 'Movie not found!'){
                //If it shows an error
                ui.showAlert('Movie Not Found','alert alert-warning');
            }else{
                //show movies
                ui.showMovie(data.movie);
            }
        })

        }else{
            //Claer Fleid
            ui.clearAll();
        }
    })
