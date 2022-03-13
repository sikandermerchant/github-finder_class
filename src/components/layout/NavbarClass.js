import React, { Component } from 'react'
//shortcut to bring in prop types with our extension impt <enter>
import PropTypes from 'prop-types'

export class NavbarClass extends Component {
  ///default prop object declaration when no props are passed.
  //using static keyword - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }
  //propTypes declaration
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}/>
          {/* inside a class based components props are used with this.props  */}
          {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default NavbarClass
