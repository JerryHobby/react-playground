import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import { getGenres } from './services/fakeGenreService';
import { getMovies, deleteMovie } from './services/fakeMovieService';
import Movies from './components/movies';
import './App.css';

class App extends Component {
  state = {
    genres: getGenres(),
    movies: getMovies(),
    counters: [
      { id: 1, value: 10, selected: true, label: 'First' },
      { id: 2, value: 20, selected: true, label: 'Second' },
      { id: 3, value: 30, selected: true, label: 'Third' },
      { id: 4, value: 50, selected: true, label: 'Fourth' },
    ],
  };

  constructor(props) {
    super(props);
    console.log('App Constructor: ', this.props);
  }

  componentDidMount() {
    // make Ajax calls to get data
    const movies = { id: 1, name: 'Die Hard' };
    this.setState(movies);
    console.log('App Mounted');
  }

  componentDidUpdate(prevProps, prevState) {}

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    if (counters[index].value > 0) {
      counters[index].value--;
    }

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
    });
    this.counters = counters;
    this.setState({});
  };

  render() {
    const { counters } = this.state;
    console.log('App Rendered ***********');
    let totalItems = 0;

    for (var i = 0; i < counters.length; i++) {
      totalItems += counters[i].value;
    }
    // console.log('Total Items: ', totalItems);
    return (
      <React.Fragment>
        <NavBar
          totalItems={totalItems}
          totalCounters={counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Movies
            genres={this.state.genres}
            movies={this.state.movies}
            onDelete={this.handleDeleteMovie}
            onLiked={this.handleLiked}
          />
          {/*
          <hr></hr>
          <Counters
            counters={counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
          */}
        </main>
      </React.Fragment>
    );
  }

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
