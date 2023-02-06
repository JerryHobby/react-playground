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

  renderSortIcon(column) {
    const { sortPath } = this.props;

    if (column.path !== sortPath.path) return null;
    if (sortPath.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  }

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              className="bg-primary text-light clickable"
              onClick={() =>
                this.raiseSort(column.path, column.defaultSort || 'asc')
              }
              scope="col"
            >
              {column.label} {this.renderSortIcon(column)}
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
