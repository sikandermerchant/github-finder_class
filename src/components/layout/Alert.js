import React from 'react'

export const Alert = ({alert}) => {
  return (
    ///display alert when alert state is not null
    alert !== null && (
      //we are using the alert type from the css as dynamic variable to define the type
      <div className = {`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"/>
          {alert.msg}
      </div>
    )  
  )
}

