import React, { Component } from 'react';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import PropTypes from 'prop-types';

export default class Movies extends Component {
  render() {
    console.log('Movies Rendered');

    return <React.Fragment>{this.renderMovies()}</React.Fragment>;
  }

  renderMovies() {
    const {
      genres,
      movies: allMovies,
      pageSize,
      onPageChange,
      onGenreChange,
      currentPage,
      currentGenre,
      onDelete,
      onLiked,
    } = this.props;

    const movies = paginate(allMovies, currentPage, pageSize);
    if (movies.length === 0) return <p>There are no movies!</p>;

    return (
      <div className="row">
        <h3>Showing {allMovies.length} movies in the database.</h3>
        <hr />
        <div className="col-3">
          <ListGroup
            items={genres}
            onGenreChange={onGenreChange}
            currentGenre={currentGenre}
          />
        </div>
        <div className="col">
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
                    <Like liked={movie.liked} onClick={() => onLiked(movie)} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={allMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    );
  }
}

Movies.propTypes = {
  genres: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLiked: PropTypes.func.isRequired,
};
