import React, { Component } from 'react';
// import UserItemClass from './UserItemClass';
import UserItemFunction from './UserItemFunction';

class Users extends Component {
  render() {
    return (
      <div style={userStyle} >
        {/* {this.state.users.map(user => (
          <UserItemClass key={user.id} user={user}/>
        ))} */}
{/* 
        The parenthesis() are returning a single value, the curly braces are executing multiple lines of code. Hence we use parenthesis instead of curly braces */}
        {this.props.users.map(user => (
          <UserItemFunction key={user.id} user={user}/>
        ))}
        
      </div>
      //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
          
      //key is used as otherwise there will be warning that react list needs unique keys and this case, ids are unique for each object in the state array.
      // return <div key={user.id}>{user.login}</div>
    //we dont want to return the above login properties but entire user in the form of UserItem component that we have created. Hence we will use our UserItem component and pass user as a prop to it as follows
    );
  }
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap:'1rem'
}
export default Users