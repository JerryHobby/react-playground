import React, { Component } from 'react';
import Like from './like';
import _ from 'lodash';
import PropTypes from 'prop-types';

// todo: fix keys
// todo: fix like
// todo: fix delete button
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + column.label || column.key;
  };

  render() {
    const { data, columns, onDelete, onLiked } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLiked: PropTypes.func.isRequired,
};
