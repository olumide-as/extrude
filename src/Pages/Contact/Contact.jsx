import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { contactbg, mail, phone, map } from '../../Assets'
import { BrandSmall, Landing } from '../../Containers'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k69qvch', 'extrude', form.current, 'pdrRtaFiAtzx0Fd6u')
      .then((result) => {
          console.log(result.text);
          toast.success('Message was sent succesfully')
      }, (error) => {
          console.log(error.text);
          toast.error(error.text)
      });

      document.getElementById("form").reset();
    }

  

  return (
    <div>
      
      <Landing 
      heading="Contact Us" 
      subheading='Ready to Launch your Project?' 
      text='We available for your inquiries and typically respond in a short while'
      bg={contactbg}
      />

      <div className='content__padding extrude__contact-content'>

        <div className=' extrude__contact-content__social'>
          <h4>How to Reach Us</h4>
          <p><BrandSmall brand="08038035222" imgUrl={phone}/></p>
          <p><BrandSmall brand="08183518005" imgUrl={phone}/></p>
          <p><BrandSmall brand="08074790921" imgUrl={phone}/></p>
          <p><BrandSmall brand="info@extrudesolutions.com" imgUrl={mail}/></p>
          <p><BrandSmall brand="extrudesolutions247@gmail.com" imgUrl={mail}/></p>
          <p><BrandSmall brand="3 Bello Street Ikosi Ketu Lagos." imgUrl={map}/></p>
          <p><BrandSmall brand="By Pipeline Market, Elikpokwu Odu, Port Harcourt" imgUrl={map}/></p>
        </div>


        <form  ref={form} onSubmit={sendEmail} className='extrude__contact-content__form' id='form'>
     
          <div >
            <h4>Send a Message</h4>
          </div> 
      

          <div className="extrude__contact-content__form-field">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className=""
              required
            />
          </div>
          <div className="extrude__contact-content__form-field">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className=""
              required
            />
          </div>
      <div className="extrude__contact-content__form-field">
        <textarea
          placeholder="Your message"
          name="message"
          className=""
          required
        />
      </div>
      <div className="extrude__contact-content__form-field">
        <button
          className=""
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>

        
      </div>
      


      </div>
  )
}

export default Contact;