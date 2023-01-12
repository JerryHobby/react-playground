import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Like extends Component {
  render() {
    const { liked, onClick } = this.props;

    if (liked == true) {
      var likedClass = 'fa fa-heart text-danger';
    } else {
      var likedClass = 'fa fa-heart-o text-muted';
    }

    return (
      <i
        className={likedClass}
        style={{ cursor: 'pointer' }}
        aria-hidden="true"
        onClick={() => onClick()}
      ></i>
    );
  }
}

Like.propTypes = {
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Like;
