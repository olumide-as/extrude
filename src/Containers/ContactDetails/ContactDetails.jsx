import React from 'react'
import "./ContactDetails.css"
import {Details} from '../../Containers'
import {mail, phone, map } from '../../Assets';


const ContactDetails = () => {
  return (
    <div>
              <div className='content__padding extrude__home-contact'>
        <div className='extrude__home-contact__heading'>
        <h2>Contact Us</h2>
          <h3>Ready to Kick off your Next Project?</h3>
          <br></br>
          <hr></hr>
        </div>
        <div className='extrude__home-contact__details'>
          <Details 
            imgUrl={mail}
            heading="extrudesolutions247@gmail.com" 
            text="We reply within 24 hours"
          />

          <Details 
            imgUrl={phone}
            heading="08038035222, 08183518005" 
            text="Have any question?"
          />

          <Details 
            imgUrl={map}
            heading="3 Bello Street, Ikosi, Ketu, Lagos" 
            text="Find Us"
          />

        </div>
      </div>
    </div>
  )
}

export default ContactDetails