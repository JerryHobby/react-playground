import React, { Component } from 'react';
import NavBar from './components/navbar';
import StatusBar from './components/common/statusbar';
import _ from 'lodash';
import { getGenres } from './services/fakeGenreService';
import { getMovies, deleteMovie } from './services/fakeMovieService';
import Movies from './components/movies';
import './App.css';

class App extends Component {
  state = {
    genres: [],
    movies: [],
    allMovies: [],
    statusBarItems: [],
    pageSize: 6,
    currentPage: 1,
    currentGenre: 'all',
    sortPath: { path: 'title', order: 'asc' },
  };

  constructor(props) {
    super(props);
    // console.log('App Constructor: ', this.props);
  }

  componentDidMount() {
    // make Ajax calls to get data
    const genres = getGenres();
    const movies = getMovies();

    const likedMovies = movies.filter(
      (movie) => movie.liked.name === true
    ).length;
    const statusBarItems = [];

    genres.unshift({ _id: 'all', name: 'All' });
    this.setState({
      movies: movies,
      allMovies: movies,
      genres: genres,
      statusBarItems: statusBarItems,
    });

    // console.log('App Mounted');
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {
      genres,
      movies,
      allMovies,
      pageSize,
      currentPage,
      currentGenre,
      statusBarItems,
      sortPath,
    } = this.state;

    const likedAllMovies = allMovies.filter(
      (movie) => movie.liked === true
    ).length;

    const likedMovies = movies.filter((movie) => movie.liked === true).length;

    const dateStr = new Date().toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    statusBarItems[0] = { label: 'Total', value: allMovies.length };
    statusBarItems[1] = { label: 'Shown', value: movies.length };
    statusBarItems[2] = { label: 'Total Liked', value: likedAllMovies };
    statusBarItems[3] = { label: 'Shown Liked', value: likedMovies };
    statusBarItems[4] = { label: 'User', value: 'Jerry' };
    statusBarItems[5] = { label: '', value: dateStr };

    // console.log('App Rendered ***********');
    let totalItems = 0;

    return (
      <React.Fragment>
        <StatusBar items={statusBarItems} />
        <NavBar />
        <main className="container">
          <Movies
            genres={genres}
            movies={movies}
            pageSize={pageSize}
            currentPage={currentPage}
            currentGenre={currentGenre}
            onDelete={this.handleDeleteMovie}
            onLiked={this.handleLiked}
            onPageChange={this.handlePageChange}
            onGenreChange={this.handleGenreChange}
            onSort={this.handleSort}
            sortPath={sortPath}
          />
        </main>
      </React.Fragment>
    );
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page.page });
  };

  handleSort = (sortPath) => {
    const { movies } = this.state;

    let sortedMovies = _.orderBy(movies, [sortPath.path], [sortPath.order]);

    // console.log(' Movies Sorted by', sortPath.path, sortPath.order);
    this.setState({ movies: sortedMovies, sortPath: sortPath });
  };

  handleGenreChange = (genre) => {
    // console.log('genre selected **********');
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
    const genre = this.state.currentGenre;
    deleteMovie(movie._id);
    const allMovies = getMovies();
    let movies = getMovies();

    if (genre != 'all') {
      movies = getMovies().filter((movie) => movie.genre._id === genre);
    }

    // console.log('Movie deleted');
    this.setState({ movies, allMovies });
  };

  handleLiked = (movie) => {
    // console.log('toggle liked');

    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    //movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState(movies);
  };
}

export default App;
