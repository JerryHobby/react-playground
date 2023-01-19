import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

// todo: fix keys
// todo: fix like
// todo: fix delete button
class TableBody extends Component {
  render() {
    const { data, columns, onDelete, onLiked } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={_.get(item, column.label)}>
                {_.get(item, column.path)}
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
