import React, { Component } from 'react';
import Like from './common/like';
import PropTypes from 'prop-types';

class MoviesTable extends Component {
  raiseSort = (path) => {
    const sortPath = { ...this.props.sortPath };

    if (sortPath.path === path) {
      sortPath.order = sortPath.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortPath.path = path;
      // default sort liked is desc
      sortPath.order = sortPath.path === 'liked' ? 'desc' : 'asc';
    }

    this.props.onSort(sortPath);
  };

  // movies, ondelete, like,
  render() {
    const { movies, onLiked, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => this.raiseSort('title')}
              scope="col"
            >
              Title
            </th>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => this.raiseSort('genre.name')}
              scope="col"
            >
              Genre
            </th>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => this.raiseSort('numberInStock')}
              scope="col"
            >
              Stock
            </th>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => this.raiseSort('dailyRentalRate')}
              scope="col"
            >
              Rate
            </th>
            <th
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() => this.raiseSort('liked')}
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
  onSort: PropTypes.func.isRequired,
  sortPath: PropTypes.object.isRequired,
};

export default MoviesTable;
