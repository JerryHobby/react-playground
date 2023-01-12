import React, { Component } from 'react';

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

export default ListGroup;
