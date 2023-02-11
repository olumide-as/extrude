import React from 'react'
import './Landing.css'


const Landing = ({heading, subheading, text, bg}) => {

  return (
    <div>
        <div className='content__padding extrude__landing' 
            style={{ 
                background: `url(${bg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundBlendMode: 'luminosity',
                backgroundColor: 'var(--color-1)' 
                 }}  >
            <div className='extrude__landing__content'>
                <h2>{heading}</h2>
                <h3>{subheading}</h3>
                <br></br>
                <hr></hr>
                <br></br>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Landing