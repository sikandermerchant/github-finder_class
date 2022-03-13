//Function based Components which doesn't uses states - since hooks have been introduced all components can be function based as hooks serves the purpose of states

import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const UserItemFunction = ({user:{login, avatar_url,html_url}}) => {
  //Unlike class based components, function based components pass in the props and dont use this.user
  //The props can be destructured further to only pass user with it destructured properties so we wont need the below
  // const { login, avatar_url, html_url } = props.user;
  return <div className='card text-center'>
    <img
      src={avatar_url}
      alt='' className='round-img'
      style={{ width: '60px' }} />
    <h3>
      {login}
    </h3>
    <div>
      <Link to={`/user/${login}`} className="btn btn-dark btn sm">
        More
      </Link>
    </div>
  </div>;
}

UserItemFunction.propTypes = {
  user: PropTypes.object.isRequired,
}
export default UserItemFunction;
