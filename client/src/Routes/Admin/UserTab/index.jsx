import React, { useState } from 'react';
import Table from 'components-shared/Table'
import PropTypes from 'prop-types'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

const UpdateUser = gql`
  mutation UpdateUser($user: UpdateUserData!) {
    updateUser(user: $user) {
      role
    }
  }
`

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
    render: (d, userData) => <RoleToggle roleInitState={d} userData={userData} />
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]

// TODO: hide self so we won't be able to 'accidently' edit self
const RoleToggle = ({ roleInitState, userData }) => {
  const { id } = userData;
  const [roleState, setRoleState] = useState(roleInitState)
  const [ updateUser ] = useMutation(UpdateUser, {
    onCompleted: (data) => {
      const { role } = data.updateUser;
      setRoleState(role);
    }
  })

  return (
    <span onClick={() => updateUser({ variables: { user: { id, role: roleState === 'admin' ? 'user' : 'admin' }}})}>
      {roleState}
    </span>
  )
}

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