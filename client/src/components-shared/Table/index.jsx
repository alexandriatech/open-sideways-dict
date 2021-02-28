import React from 'react';
import RcTable from 'rc-table';

// wrapper for rc-table with our own styling (and maybe more)
// props should be the same as rctable but with a few extras and should be mentioned in proptypes
const Table = (props) => {
  return <RcTable {...props} />
}

export default Table;