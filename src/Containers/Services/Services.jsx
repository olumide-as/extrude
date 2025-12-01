import React from 'react'
import Button1 from '../Button1/Button1'
import './Services.css'

const Services = ({imgUrl, heading, text, link, buttontext}) => {
  return (
    <div className='services'>
        <img src={imgUrl} alt="services"/>
        <h4>{heading}</h4>
        <p>{text}</p>
        <a href={link}><Button1 buttontext={buttontext} /></a>
    </div>
  )
}

export default Services