class Movies{
    constructor(){
        this.apikey = 'aabac60c';
    
    }
    async getMovies(movies){
        const movieResponse = await fetch(`http://www.omdbapi.com/?apikey=${this.apikey}&t=${movies}`);

        const movie = await movieResponse.json();

        return {
            movie
        }
    }   
}