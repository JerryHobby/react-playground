import React, { Component } from 'react';
import Like from './common/like';
import PropTypes from 'prop-types';

class MoviesTable extends Component {
  // movies, ondelete, like,
  render() {
    const { movies, onLiked, onDelete, onSort } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => onSort('title', 'asc')}
              scope="col"
            >
              Title
            </th>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => onSort('genre.name', 'asc')}
              scope="col"
            >
              Genre
            </th>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => onSort('numberInStock', 'asc')}
              scope="col"
            >
              Stock
            </th>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => onSort('dailyRentalRate', 'asc')}
              scope="col"
            >
              Rate
            </th>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => onSort('liked', 'desc')}
              scope="col"
            >
              Liked
            </th>
            <th
              className="bg-primary text-light"
              scope="col"
            ></th>
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
                <Like
                  liked={movie.liked}
                  onClick={() => onLiked(movie)}
                />
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
    );
  }
}

MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  onLiked: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MoviesTable;
