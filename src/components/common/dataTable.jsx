import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader';
import TableBody from './tableBody';


class DataTable extends Component {

  render() {
    const { columns, sortPath, onSort, data, onDelete, onLiked } = this.props;

    return(
      <table className="table">
        <TableHeader
          columns={columns}
          sortPath={sortPath}
          onSort={onSort}
        />
        <TableBody
          data={data}
          columns={columns}
          onDelete={onDelete}
          onLiked={onLiked}
        />
      </table>
    );
  }
}

export default DataTable;