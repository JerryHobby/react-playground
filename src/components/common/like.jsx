import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Like extends Component {
  render() {
    const { liked, onLiked } = this.props;

    if (liked == true) {
      var likedClass = 'fa fa-heart text-danger clickable';
    } else {
      var likedClass = 'fa fa-heart-o text-muted clickable';
    }

    return (
      <i
        className={likedClass}
        aria-hidden="true"
        onClick={() => onLiked()}
      ></i>
    );
  }
}

Like.propTypes = {
  liked: PropTypes.bool.isRequired,
  onLiked: PropTypes.func.isRequired,
};

export default Like;
