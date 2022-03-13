import React from 'react'
import UserItemFunction from './UserItemFunction';
import { Spinner } from '../layout/Spinner';
import PropTypes from 'prop-types'

export const UsersFunction = ({ users, loading }) => {
  if (loading) {
    return <Spinner/>
  } else {
    return (
      <div style={userStyle} >
      {users.map(user => (
        <UserItemFunction key={user.id} user={user}/>
      ))}
      
    </div>
    )
  }
}
UsersFunction.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap:'1rem'
}
