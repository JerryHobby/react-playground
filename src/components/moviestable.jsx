import React, { Component } from 'react';
import Like from './common/like';
import PropTypes from 'prop-types';

class MoviesTable extends Component {
  // movies, ondelete, like,
  render() {
    const { movies, onLiked, onDelete, onPageSort } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => onPageSort('Title')}
              scope="col"
            >
              Title
            </th>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => onPageSort('Genre')}
              scope="col"
            >
              Genre
            </th>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => onPageSort('Stock')}
              scope="col"
            >
              Stock
            </th>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => onPageSort('Rate')}
              scope="col"
            >
              Rate
            </th>
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
