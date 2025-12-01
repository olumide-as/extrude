import React from 'react'
import './Details.css'

const Details = ({imgUrl, heading,text}) => {
  return (
    <div className='details'>
        <img src={imgUrl} alt="details"/>
        <h5>{heading}</h5>
        <p>{text}</p>
    </div>
  )
}

export default Details