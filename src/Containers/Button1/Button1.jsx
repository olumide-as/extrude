import React from 'react'
import './Button1.css'

const Button1 = ({buttontext}) => {
  return (
    <div className="button1">
        <button><p>{buttontext}</p></button>
    </div>
    
  )
}

export default Button1