import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ListGroup = (props) => {
  const { items, onGenreChange, textProperty, valueProperty, currentGenre } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            currentGenre === item[valueProperty]
              ? 'active list-group-item'
              : 'list-group-item'
          }
          onClick={() => onGenreChange(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
  currentGenre: PropTypes.string.isRequired,
};

export default ListGroup;
