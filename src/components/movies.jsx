import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

export default class Movies extends Component {
  render() {
    console.log('Movies Rendered');

    return <React.Fragment>{this.renderMovies()}</React.Fragment>;
  }

  renderMovies() {
    const {
      movies: allMovies,
      pageSize,
      onPageChange,
      currentPage,
      onDelete,
      onLiked,
    } = this.props;

    const movies = paginate(allMovies, currentPage, pageSize);
    if (movies.length === 0) return <p>There are no movies!</p>;

    return (
      <div>
        <h3>Showing {allMovies.length} movies in the database.</h3>
        <hr />
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
    );
  }
}
