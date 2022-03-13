import React from 'react'
//shortcut to bring in prop types with our extension impt <enter>
import PropTypes from 'prop-types'
//we use {} to import from react-router-dom as it is not the default export from it
import { Link } from 'react-router-dom'

const NavbarFunction = ({icon,title}) => {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}/>
          {title}
        </h1>
        {/* For creating links we can use <a></a> tags but when browsing through the pages(links) the state of pages is cleared (lost) and it is refreshed to default. Hence we use <Link> tag from react-router-dom where href changes to 'to' */}
        <ul>
          <li>
            <Link to = '/'>Home</Link>
          </li>
          <li>
            <Link to = '/about'>About</Link>
          </li>
        </ul>
      </nav>
    )
  }
 NavbarFunction.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}
NavbarFunction.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
export default NavbarFunction
