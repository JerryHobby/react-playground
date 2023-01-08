import React, { Component } from 'react';

class Like extends Component {
  render() {
    if (this.props.liked == true) {
      var likedClass = 'fa fa-heart text-danger';
    } else {
      var likedClass = 'fa fa-heart-o text-muted';
    }

    return (
      <i
        className={likedClass}
        style={{ cursor: 'pointer' }}
        aria-hidden="true"
        onClick={() => this.props.onClick()}
      ></i>
    );
  }
}

export default Like;
