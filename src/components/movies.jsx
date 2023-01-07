import React, { Component } from "react";

export default class Movies extends Component {

    render() {
      
        return (
            <React.Fragment>

                {this.renderMovies()}
            </React.Fragment>
        );
    }

    renderMovies() {
      const { genres, movies, onDelete } = this.props;
        //let buttonClasses = this.getButtonClasses();

        if (movies.length === 0) return <p>There are no movies!</p>;

        return (
            <div>
                <h3>Showing {movies.length} movies in the database.</h3>
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
                {movies.map((movie) => (

                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
                              <td>
                               {this.showHeart(movie)}
                              </td>
                              
                                <td><button className='btn btn-danger'
                                    onClick={() => onDelete(movie)}>Delete</button></td>
                            </tr>
                ))}
            </tbody>
            </table>
            </div>
        );
    }


  showHeart(movie) {
const { onFavorite } = this.props;
    if(movie.favorite ==  true) {
    return(
    <i class="fa fa-heart text-danger" aria-hidden="true"
       onClick={() => this.props.onFavorite(movie)}>
      </i>
    );
    } else {
    return(
    <i  class="fa fa-heart-o text-muted" aria-hidden="true"
       onClick={() => this.props.onFavorite(movie)}>
      </i>
      );
    }
  }
}