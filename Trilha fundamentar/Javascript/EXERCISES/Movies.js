const movies = [
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
 
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
 
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
 
    { title: "12 Angry Men", director: "Sidney Lumet", year: 1957 },
 
    { title: "Schindler's List", director: "Steven Spielberg", year: 1993 },
 
    { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", year: 2003 },
 
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
 
    { title: "The Good, the Bad and the Ugly", director: "Sergio Leone", year: 1966 },
 
    { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },
 
    { title: "Inception", director: "Christopher Nolan", year: 2010 }
  ];
 

// Conte o número de filmes. [concluído]
(() => {
    const allM = movies.length
    console.log(allM)
}) ();


// Conte o número de filmes dirigidos por Christopher Nolan. [concluído]
// Liste todos os filmes dirigidos por Christopher Nolan. [concluído]
function moviesByChris(){
    let ChrisMovies = []
    for(let movie of movies){
        if(movie.director === 'Christopher Nolan'){
            ChrisMovies.push(movie.title)
        }
    }
    console.log(`
    Movies: ${ChrisMovies.join(', ')}
    How many: ${ChrisMovies.length}
    `)
}
moviesByChris()

// Conte o número de filmes lançados na década de 90. [concluído]
// Liste todos os filmes lançados na década de 90. [concluído]
// Liste todos os filmes lançados depois da décade de 90. [concluído]
function countMovies90(){
    let movies90 = []
    let movierAfter90 = []
    for(let movie of movies){
        if(movie.year >= 1990 && movie.year < 2000){
            movies90.push(movie.title)
        } else if (movies.year >= 2000){
            moviesAfter90.push()
        }
    }
    console.log(`
    How many: ${movies90.length}
    Movies: ${movies90.join(', ')}
    `)
}
countMovies90();

// Liste todos os filmes em ordem alfabética
(() => {
    let allMoviesSort = []
    for(movie of movies){
        allMoviesSort.push(movie.title)
    }
    console.log(allMoviesSort.sort())
}) ()