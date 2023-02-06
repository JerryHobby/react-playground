import React, { Component } from 'react';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import MoviesTable from './moviesTable';
import PropTypes from 'prop-types';

export default class Movies extends Component {
  render() {
    // console.log('Movies Rendered');

    return <React.Fragment>{this.renderMovies()}</React.Fragment>;
  }

  renderMovies() {
    const {
      genres,
      movies: allMovies,
      pageSize,
      onPageChange,
      onGenreChange,
      onSort,
      sortPath,
      currentPage,
      currentGenre,
      onDelete,
      onLiked,
    } = this.props;

    const movies = paginate(allMovies, currentPage, pageSize);

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
          <MoviesTable
            movies={movies}
            onLiked={onLiked}
            onDelete={onDelete}
            onSort={onSort}
            sortPath={sortPath}
          />
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
  onSort: PropTypes.func.isRequired,
  sortPath: PropTypes.object.isRequired,
};
