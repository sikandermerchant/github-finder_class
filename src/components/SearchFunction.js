import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function SearchFunction(props) {
  const [text, setText] = useState()

  const onTextChange = (e) => {
    setText(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(text)
  }

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input type='text' name='text' placeholder='Search Users......'onChange={onTextChange}/>
        <input type='submit' value='submit' className='btn btn-dark btn-block'/>
      </form>
    </div>
  )
}
SearchFunction.defaultProps = {
  text: ''
}
SearchFunction.propTypes = {
  text: PropTypes.string.isRequired
}