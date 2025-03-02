import React from 'react'
import "../css/Button.css"

const Button = (props) => {
  return (
    <div className="wrapper">   
        <a href="#"><span>{props.name}</span></a>
    </div>
  )
}

export default Button