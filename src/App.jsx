import React, { Component } from 'react';
import NavBar from './components/navbar';
import StatusBar from './components/statusbar';
import _ from 'lodash';
import { getGenres } from './services/fakeGenreService';
import { getMovies, deleteMovie } from './services/fakeMovieService';
import Movies from './components/movies';
import './App.css';

class App extends Component {
  state = {
    genres: [],
    movies: [],
    statusBarItems: [],
    pageSize: 6,
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

    const statusBarItems = [
    {
      label: 'Total Movies',
      value: '500',
    },
    {
      label: 'Current View',
      value: '50',
    },
      {
      label: 'Total Liked',
      value: '25',
    },
    {
      label: 'Current Liked',
      value: '5',
    },
 {
      label: 'Date',
      value: '12/25/2025',
    },
];

    genres.unshift({ _id: 'all', name: 'All' });
    this.setState({ movies: movies, genres: genres, statusBarItems: statusBarItems });

    console.log('App Mounted');
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { statusBarItems } = this.state;
    console.log('App Rendered ***********');
    let totalItems = 0;

    return (
      <React.Fragment>
        <StatusBar items = {statusBarItems}/>
        <NavBar />
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
    const currentPage = 1;
    let movies = [];
    if (genre._id === 'all') {
      movies = getMovies();
    } else {
      movies = getMovies().filter((movie) => movie.genre.name === genre.name);
    }

    this.setState({
      currentGenre: currentGenre,
      movies: movies,
      currentPage: currentPage,
    });
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
