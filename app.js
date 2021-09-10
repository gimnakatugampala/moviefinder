// Init Movies
const movie = new Movies;
// Init UI
const ui = new UI;

// Search input
const searchMovie = document.getElementById('searchMovies');

searchMovie.addEventListener('keyup',(e) =>{
    const userInput = e.target.value;
    if(userInput !== ''){
        
        movie.getMovies(userInput)
        .then(data => {
            if(data.movie.Error === 'Movie not found!'){
                // If it shows an error
                ui.showAlert('Movie Not Found','alert alert-warning');
            }else{
                // Show movies
                ui.showMovie(data.movie);
            }
        })

        }else{
            // Clear Field
            ui.clearAll();
        }
    })
