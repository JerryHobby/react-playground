import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import PropTypes from 'prop-types';

class MoviesTable extends Component {
  columns = [
    { label: 'Title', path: 'title' },
    { label: 'Genre', path: 'genre.name' },
    { label: 'Stock', path: 'numberInStock' },
    { label: 'Rate', path: 'dailyRentalRate' },
    {
      label: 'Like',
      path: 'liked',
      defaultSort: 'desc',
      content: (movie) => (
        <Like
          liked={movie.liked}
          onLiked={() => this.props.onLiked(movie)}
        />
      ),
    },
    {
      key: 'delete',
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
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
        <TableBody
          data={movies}
          columns={this.columns}
          onDelete={onDelete}
          onLiked={onLiked}
        />
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
