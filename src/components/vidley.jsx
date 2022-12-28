import React, { Component } from "react";

import {getGenres} from '../services/fakeGenreService';
import { getMovies, deleteMovie} from '../services/fakeMovieService';

export class Vidley extends Component {

    genres = getGenres();

    state = {
        genres: getGenres(),
        movies: getMovies(),
    };


    render() {
        return (
            <React.Fragment>

                {this.renderMovies()}
            </React.Fragment>
        );
    }

/*
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
 */

    renderMovies() {
        //let buttonClasses = this.getButtonClasses();

        if (this.state.movies.length === 0) return <p>There are no movies!</p>;

        return (
            <div>
                <h3>Showing {this.state.movies.length} movies in the database.</h3>
                <hr/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                {this.state.movies.map((movie) => (

                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button className='btn btn-danger'
                                    onClick={() => this.handleDelete(movie)}>Delete</button></td>
                            </tr>
                ))}
            </tbody>
            </table>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        this.handleShowState();
        return count === 0 ? "zero" : count;
    }

    handleDelete = (movie) => {
        const output = JSON.stringify(movie, null, 2);

        deleteMovie(movie._id);
        console.log(output);

        this.setState(this.state.movies);
    }

    handleIncrement = (product) => {
        const { count } = this.state;

        product.counter++;
        this.setState({count: count + 1 });
        this.setState(product);
    }
}