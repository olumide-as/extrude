import React from 'react'
import "./Footer.css"
import { logo, fb, linkedin } from '../../Assets'

const Footer = () => {

  const current = new Date();
  const date = current.getFullYear();

  return (
    <div className='content__padding extrude__footer'>

      <div className='extrude__footer_01'>
        <img src={logo} alt="extrude" />
        <p>Creating Innovation Hastens The Future</p>
        <p> &copy; {date}</p>
      </div>

      <div className='extrude__footer_02'>
        <a href='/'><p>Home</p></a>
        <a href='/about'><p>About</p></a>
        <a href='/gallery'><p>Gallery</p></a>
      </div>

      <div className='extrude__footer_03'>
        <a href='/hse'><p>Health and Safety Policy</p></a>
        <a href='../#partners'><p>Partners</p></a>
        <a href='/contact'><p>Contact Us</p></a>
      </div>

      <div className='extrude__footer_04'>
        <a href="https://www.facebook.com/Extrudesolutions"><img src={fb} alt="extrude Facebook" /></a>
        <a href="https://www.linkedin.com/company/extrude-solutions/"><img src={linkedin} alt="extrude Linkedin" /></a>

      </div>
    </div>
  )
}

export default Footer