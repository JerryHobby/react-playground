import React, { Component } from 'react';
import NavBar from './components/navbar';
import { getGenres } from './services/fakeGenreService';
import { getMovies, deleteMovie } from './services/fakeMovieService';
import Movies from './components/movies';
import './App.css';

class App extends Component {
  state = {
    genres: [],
    movies: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: 'all',
  };

  constructor(props) {
    super(props);
    console.log('App Constructor: ', this.props);
  }

  componentDidMount() {
    // make Ajax calls to get data
    const genres = getGenres();
    const movies = getMovies();
    this.setState({ movies: getMovies(), genres: getGenres() });

    console.log('App Mounted');
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { counters } = this.state;
    console.log('App Rendered ***********');
    let totalItems = 0;

    return (
      <React.Fragment>
        <NavBar
        />
        <main className="container">
          <Movies
            genres={this.state.genres}
            movies={this.state.movies}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            currentGenre={this.state.currentGenre}
            onDelete={this.handleDeleteMovie}
            onLiked={this.handleLiked}
            onPageChange={this.handlePageChange}
            onGenreChange={this.handleGenreChange}
          />
        </main>
      </React.Fragment>
    );
  }
  
  handlePageChange = (page) => {
    this.setState({ currentPage: page.page });
  };

  handleGenreChange = (genre) => {
    console.log('genre selected **********');
    const currentGenre = genre._id;
    this.setState({ currentGenre: currentGenre });
  };

  handleDeleteMovie = (movie) => {
    const movies = deleteMovie(movie._id);
    console.log('Movie deleted');
    this.setState(movies);
  };

  handleLiked = (movie) => {
    console.log('toggle liked');

    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    //movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState(movies);
  };
}

export default App;
