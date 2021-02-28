import React from 'react';
import Table from 'components-shared/Table'
import PropTypes from 'prop-types'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Role',
    dataIndex: 'role',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]

const UserTab = ({ users }) => {
  return <Table columns={columns} data={users} rowKey={'id'}/>
}

UserTab.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      role: PropTypes.string,
      email: PropTypes.string,
    })
  )
}

export default UserTab;