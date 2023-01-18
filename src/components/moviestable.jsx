import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import PropTypes from 'prop-types';
class MoviesTable extends Component {
  columns = [
    { label: 'Title', path: 'title' },
    { label: 'Genre', path: 'genre.name' },
    { label: 'Stock', path: 'numberInStock' },
    { label: 'Rate', path: 'dailyRentalRate' },
    { label: 'Like', path: 'liked', defaultSort: 'desc' },
    { key: 'delete' },
  ];

  render() {
    const { movies, onLiked, onDelete, onSort, sortPath } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortPath={sortPath}
          onSort={onSort}
        />
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
