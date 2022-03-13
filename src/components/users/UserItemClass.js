//Class based Components which uses states - however eventually we are not using state in this app

import React, { Component } from 'react';

class UserItemClass extends Component {
    //The constructor method is a special method of a class for creating and initializing an object instance of that class.
  //The super keyword is used to access and call functions on an object's parent.
  // constructor(){
  //   super()
  //   //state is similar to a js object,so declaring the state for the component here
  //   this.state = {
  //     id: 'id',
  //     login: 'octocat',
  //     avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  //     html_url: "https://github.com/octocat"
  //   }
  // }
  //however the state will be still fine if we just declare it without using a constructor declaration which is also recommended as follows:
    // state = {
    //   id: 'id',
    //   login: 'octocat',
    //   avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    //   html_url: "https://github.com/octocat"
  
    // }
//The above state however wont be used when used as a component to add props - see Users.js where it has users passed in as props. In this file we pass the user from the props which were added to Users, which is then destructured
  render() {
    //call in state property using this.state and destructure the state (object) so we don't need to use this.state
    const {login, avatar_url, html_url} = this.props.user;
    return <div className='card text-center'>
      <img
        src={avatar_url}
        alt='' className='round-img'
        style={{ width: '60px' }} />
      <h3>
        {login}
      </h3>
      <div>
        <a href={html_url} className="btn btn-dark btn sm">More</a>
      </div>
    </div>;
  }
}

export default UserItemClass;
