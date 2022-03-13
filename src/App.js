import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarFunction from './components/layout/NavbarFunction';
// import NavbarClass from './components/layout/NavbarClass';
import './App.css';
// import Users from './components/users/Users';
import { UsersFunction } from './components/users/UsersFunction';
import Search from './components/Search';
// import SearchFunction from './components/SearchFunction';
import User from './components/users/User';
import axios from 'axios';
import { Alert } from './components/layout/Alert'
import { About } from './components/pages/About';

class App extends Component{

//We want to use the use the res.data (users) that we get of the axios response of the api into our app state, so lets create one as follows:
  state = {
    users: [],
    user: {},
    repos: [],
    //the reason why we have loading is because there is gonna be moment in time before we get the data, so while we are loading we can use the condition change from false to true to show a spinner
    loading: false,
    //we will add in an alert state, which will be initially set as null and will get value when an  error occurs
    alert: null,
  }
//When not using a central state manager like Redux, its ideal to manage state and and pass into components as props 
//similar to render there are other lifecycle methods like componentDidMount
//using Promises
  // componentDidMount() {
  //   axios.get('https://api.github.com/users')
  //     .then(res => {
  //     console.log(res.data)
  //     })
  //     .catch(error => {
  //     console.log(error);
  //     })  
  // }
  //Using async await
  // async componentDidMount() {
  //   //here we will change the state of loading to true. We cant change the state directly like this.state.loading = true.
  //   //We have to use for class-based components setState to change the state as follows
  //   this.setState({ loading: true });
  //   try {
  //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //     // console.log(res.data);
  //     // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //     //just like above used setState to change state of users and loading
  //     this.setState({users : res.data , loading : false})
  //   } catch (error) {
  //     console.error('API ERROR');
  //   }
  // }
  //Search GitHub users from an api using a search text, client id and client secret
  //async await syntax for arrow function is different and as follow:
  searchUsers = async (text) => {
    // console.log(text)
    this.setState({loading : true})
    try {
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      // console.log(res.data.items);
      // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
      // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
      this.setState({users : res.data.items, loading : false})
    } catch (error) {
      // console.log('API ERROR')
      //change state of loading to false
      this.setState({ loading: false })
      ///display alert
      this.setAlert('Please enter a valid search', 'light')
    }

  }
  //Search Single user from github api using a username, client id and client secret
  getUser = async (login) => {
    this.setState({loading : true})
    try {
      const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({user : res.data, loading : false})
    } catch (error) {
      this.setState({ loading: false })
    }

  }
  //Search user repos (5 per page) sorted by latest created from github api using a username, client id and client secret
  getUserRepos = async (login) => {
    this.setState({loading : true})
    try {
      const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ repos: res.data, loading: false })
      console.log(res.data);
    } catch (error) {
      this.setState({ loading: false })
    }

  }
  //clear users and set state to default
  clearUsers = () => {
    this.setState({users : [] , loading : false})
  }
  //setAlert methods
  setAlert = (msg,type) => {
    this.setState({
      alert: {
        msg: msg,
        type:type
      }
    })
    //clear the alert message after 4 seconds
    setTimeout(() => {
      this.setState({alert:null})
    },4000)
  }
  //Main app render - render is a lifecycle method for React
  render() {
    ///destructuring users and loading from this.state
    const {users, user, repos, loading} = this.state
    return (
      <Router>
        <div className='App'>
        {/* <NavbarClass title='GithubFinder' icon='fab fa-github' /> */}
          <NavbarFunction title='GithubFinder' icon='fab fa-github'/>
          <div className="container">
            <Alert alert={this.state.alert}/>
          {/* Here we will send a prop up(not down from the Search component, which is slightly messy when you dont have central state manager like Redux, you end up doing prop drilling) */}
          {/* similar to searchUsers, clearUsers is passed up from the Search component to the app as oppose to other way around, on passing we then call a method searchUsers, which will be declared above, again similar to searchUsers */}
            {/* there are multiple ways to show Clear button only when there is a list of users on display, in our case we will pass in a conditional prop showClear - this will be set as an ternary expression which will be true when the length of the user array > 1  */}
            {/* We will wrap our /route with Switch so we display them one at a time */}
          <Switch>
              {/*We want to make the search page as our home page, hence we will then add a route with a path '/' with exact followed by a render prop which takes in props in which we will render a Fragment. Inside the Fragment we will add the Search and Users component
              //However since v6 of react-router-dom since you're in charge of creating the 'element', you just pass a prop to the component as you normally would without using render as it was done prior to v6. So we will directly add the Fragment to the element. Also Switch is not supported anymore instead we use 'Route'
              https://ui.dev/react-router-pass-props-to-components, https://reactrouter.com/docs/en/v6/upgrading/v5, https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
              */
              }
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    {/* <SearchFunction/> */}
                    <UsersFunction loading={loading} users={users}/>
                  </Fragment>
                  )
                }
              />
              <Route
                exact
                path='/about'
                // It was different before v6 using components, the new way is https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
                component={About}
              />
              <Route
                exact
                path='/user/:login'
                // we will use the spread operator to pass any extra props
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
          </Switch>
          </div>
        
        </div>   
      </Router>
    );
  }

}

export default App;
