import React from 'react'
import './AboutServices.css'

const AboutServices = ({imgUrl, heading, text}) => {
  return (
    <div>
        <div className='aboutservices'>
        <img src={imgUrl} alt="aboutservices"/>
        <div className='aboutservices__content'>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
        </div>
    </div>
  )
}

export default AboutServices