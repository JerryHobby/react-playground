import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableHeader extends Component {
  raiseSort = (path, defaultSort) => {
    const sortPath = { ...this.props.sortPath };

    if (sortPath.path === path) {
      sortPath.order = sortPath.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortPath.path = path;
      sortPath.order = defaultSort;
    }

    this.props.onSort(sortPath);
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              className="bg-primary text-light"
              style={{ cursor: 'pointer' }}
              onClick={() =>
                this.raiseSort(column.path, column.defaultSort || 'asc')
              }
              scope="col"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  sortPath: PropTypes.object.isRequired,
};
