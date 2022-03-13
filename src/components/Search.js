import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
  //In Reach for form, you normally create state for the input as follows:
  state = {
    text: ''
  }
  //Also, even if we implement redux or a central state manager, form input state is maintained at component level
  onChange = (e) => {
    ///normally we could just set the new state with changing the text to 'text:e.target.value}' however if there is a form with multiple inputs like text, email, etc, its best to use 'name' so you can have multiple input types in a single onchange class
    // this.setState({ text: e.target.value })
    ///normally we could just set the new state with changing the text to 'text:e.target.value}' however if there is a form with multiple inputs like text, email, etc, its based to use name as follows:
    this.setState({[e.target.name] : e.target.value})
  }
  static propTypes = {
    searchUsers : PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }
  ///if not used an arrow function, we will have to then use 'bind(this)',when we call the onSubmit method, so always use arrow functions
  onSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.text)
    //Once submitting the form, instead of console logging the text as above, we will pass on a function in the props called searchUsers and pass in text as below:
    //The searchUsers doesn't not exist here but is defined in Apps where we are managing central state - the prop will be passed up to the app as oppose to be in sent down from it.
    //the if statement adds the validation that if this.state.text is empty then we show and alert
    if (this.state.text === '') {
      //the alert method is called in with the message (msg) and type : Please enter a valid search and light
      this.props.setAlert('Please enter a valid search','light')
    } else {
      this.props.searchUsers(this.state.text);
    ///we will then want to clear the form:
    this.setState({text:''})
    }
    this.props.searchUsers(this.state.text);
    ///we will then want to clear the form:
    this.setState({text:''})
  }
  render() {
    ///destructuring clearUsers and showClear from this.props
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input type='text' name='text' placeholder='Search Users..' value={this.state.text}
            onChange={this.onChange} />
          <input type='submit' value='Search' className='btn btn-dark btn-block'/>
        </form>
        {
          showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        }
        
      </div>
    )
  }
}

export default Search