class UI{
    constructor(){
        this.profile = document.getElementById('movies');
    }
    
    // Display movies in UI
    showMovie(movie){
        this.profile.innerHTML = `
        <div class="row">
        <div class="col-md-4">
            <div class="card mb-4">
                <h3 class="card-header text-success">${movie.Title}</h3>
                <div class="card-body">
                  <h5 class="card-title text-primary">Genre(s) : ${movie.Genre}</h5>
                  <h5 class="card-title text-danger">Type : ${movie.Type}</h5>
                  <h6 class="card-subtitle text-warning">Year : ${movie.Year}</h6>
                </div>
                <img src="${movie.Poster}">
                <div class="card-body">
                  <p class="card-text text-secondary">Language : ${movie.Language}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-success">Runtime : ${movie.Runtime}</li>
                  <li class="list-group-item text-warning">Country : ${movie.Country}</li>
                  <li class="list-group-item text-danger">Rated : ${movie.Rated}3</li>
                  <li class="list-group-item text-info">Production Company : ${movie.Production}3</li>
                </ul>
                <div class="card-footer text-primary">
                  Director/s : ${movie.Director}
                </div>
              </div>

        </div>
        <div class="col-md-8">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Plot</h5>
                    <span class="badge badge-primary">Plot</span>
                  </div>
                  <p class="mb-1">${movie.Plot}</p>
                  
                </a>

                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Writers</h5>
                    <span class="badge badge-success">Writer</span>
                  </div>
                  <p class="mb-1">${movie.Writer}</p>
                  
                </a>
                
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Actors</h5>
                    <span class="badge badge-warning">Actor</span>
                  </div>
                  <p class="mb-1">${movie.Actors}</p>
                 
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Awards</h5>
                    <span class="badge badge-danger">Awards</span>
                  </div>
                  <p class="mb-1">${movie.Awards}</p>
                 
                </a>
              </div>

              
              <ul class="list-group mt-5 mb-5">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Metascore
                  <span class="badge badge-primary badge-pill">${movie.Metascore}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    imdbRating
                  <span class="badge badge-primary badge-pill">${movie.imdbRating}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    imdbVotes
                  <span class="badge badge-primary badge-pill">${movie.imdbVotes}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    imdbID
                  <span class="badge badge-primary badge-pill">${movie.imdbID}</span>
                </li>
              </ul>

        </div>
    </div>
        
        `;
    }

    // Show alert messages
    showAlert(message,classname){
        // Clear any remaining alerts
        this.clearAlert()

        // Create a div element
        const div = document.createElement('div');
        // Add Class
        div.className = classname;
        // Append text node 
        div.appendChild(document.createTextNode(message));

        // Search container
        const searchContainer = document.querySelector('.searchContainer');

        // Jumbotron
        const jumbotron = document.querySelector('.jumbotron');

        // Insert the alert
        searchContainer.insertBefore(div,jumbotron);

        // Set timeout
        setTimeout(() => {
            this.clearAlert();
          }, 2000);
    }

     // Clear alert message
     clearAlert() {
        const currentAlert = document.querySelector('.alert');
    
        if(currentAlert){
          currentAlert.remove();
        }
      }

    // Clear input feilds
    clearAll(){
        this.profile.innerHTML = '';
    }
}