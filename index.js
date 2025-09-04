const express = require('express')
const app = express()
const port = 3000
const data = {
    movies: [
        {id: 301,title: "inception",director: "christopher nolan",genre: "science function", release_year: "2010", runtime_min: "148",rating: "8.8"},
        {id: 302,title: "the shawsshank",director: "frank darabont",genre: "drama", release_year: "1994", runtime_min: "142",rating: "9.3"},
        {id: 303,title: "pulp fiction",director: "quentin tarantino",genre: "crime", release_year: "1994", runtime_min: "154",rating: "8.9"},
        {id: 304,title: "the dark knight",director: "christopher nolan",genre: "superhero", release_year: "2008", runtime_min: "152",rating: "9.0"},
        {id: 305,title: "forest gump",director: "robert zemeckis",genre: "drama", release_year: "1994", runtime_min: "142",rating: "8.8"},
        {id: 306,title: "the matrix",director: "lanna and lilly wachowski",genre: "science function", release_year: "1999", runtime_min: "136",rating: "8.7"},
        {id: 307,title: "fight club",director: "david fincher",genre: "drama", release_year: "1999", runtime_min: "139",rating: "8.8"},
        {id: 308,title: "interstallar",director: "christopher nolan",genre: "science function", release_year: "2014", runtime_min: "169",rating: "8.7"},
        {id: 309,title: "goodfellas",director: "matrin scorsese",genre: "crime", release_year: "1990", runtime_min: "146",rating: "8.7"},
    ]
}
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/developer',(req, res) => {
  res.send("Rapail Apatan Padenas");
});

app.get('/api/movies',(req, res) => {
  res.status(200).json(data.movies);
});

app.get('/api/movies/genre/crime',(req, res) => {
  const movies = data.movies;
  const crime_movies = movies.filter((movie) => movie.genre === "crime");
  console.log(crime_movies);
  res.status(200).json(crime_movies);
});

app.get('/api/movies/id',(req, res) => {
    const id = req.params.id;

    const index = data.movies.findIndex(movie => movie.id === id);
  if (index === -1){
    return res.status(404).json({message: "ID not found."});
  }
  
});

app.post('/api/movies/add',(req, res) => {
    const newMovies = req.body;
    data.student = [data.students, newMovies];
    res.status(200).json({message: " movies added successfully"});
});

app.put("/api/movies/:id/update", (req, res) => {
  const id = req.params.id;
  const updatedMovieData = req.body;

  const index = data.movies.findIndex(movie => movie.id === id);
  if (index === -1){
    return res.status(404).json({message: "ID not found."});
  }

  data.movies[index].id = updatedMovieData.id;
  data.movies[index].title = updatedMovieData.title;
  data.movies[index].director = updatedMovieData.director;
  data.movies[index].genre = updatedMovieData.genre;
  data.movies[index].release_year = updatedMovieData.release_year;
  data.movies[index].untime_min = updatedMovieData.untime_min;
  data.movies[index].rating = updatedMovieData.rating;
  
  res.status(200).json(data.movies[index]);
});

app.delete("/movie/:id", (req, res) => {
  const id = req.params.id;
  const movieIndex = data.movie.findIndex((movie) => movie.sid === id);
  if (movieIndex === -1) {
    return res.status(404).json({message: "movie cannot be found."});
  }

  data.movies.splice(moviesIndex, 1);
  res.status(200).json({message: "Successfully deleted."});
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});