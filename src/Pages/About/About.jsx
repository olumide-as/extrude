import React from 'react'
import { history, vision, aboutbg, design, fabrication, construction, project } from '../../Assets'
import { Button1, ContactDetails, Landing } from '../../Containers'
import AboutServices from '../../Containers/AboutServices/AboutServices'
import "./About.css"

const About = () => {
  return (
    <div>
      <Landing 
      heading="About Us" 
      subheading='Experience to be trusted' 
      text='We remain a modern provider of Construction and Maintenance services, using the latest technologies.'
      bg={aboutbg}
      />

      <div className='content__padding extrude__about-history'>
        <div className='extrude__about-history__image'>
          <img src={history} alt="about"/>
        </div>
        <div className='extrude__about-history__content'>
          <h2>World Wide Reach</h2>
          <h3>We Deliver On Time, In Budget And With Quality</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <p>Extrude Solutions was established in 2007 by a young corper 
            with the dream to service the NIgerian Steel Manufacturing and Construction Market.
          </p>
          <br></br>
          <p>The Company specializes in all aspects of steel fabrication and in the construction 
            of pre-engineered steel structural projects.  It encompasses all types of steelwork, 
            cladding, roofing, fabrication, designing, piping systems, bins, tanks and pressure 
            vessels, blasting and painting
          </p>
        </div>
      </div>

      <div className='content__padding extrude__about-mission'>
      <div className='extrude__about-mission__content'>
          <h2>Vision</h2>
          <h3>Vision Statement</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <p>To be at the forefront of engineering, maintenance and construction in Nigeria</p>
        </div>

        <div className='extrude__about-mission__image'>
          <img src={vision} alt="about"/>
        </div>

        <div className='extrude__about-mission__content'>
          <h2>Mission</h2>
          <h3>Mission Statement</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <p>To remain a modern provider of Construction and Maintenance Services, using the latest technologies and offer technologically innovative designs and solutions to achieve highest level of work quality and excellent services while maximizing returns to client/stakeholders </p>
        </div>
      </div>

      <div className='content__padding extrude__about-process'>
        <div className='extrude__about-process__content'>
            <h2>Service Areas</h2>
            <h3>Our Work Process</h3>
            <br></br>
            <hr></hr>
            <br></br>
            <p>We Provide Professional Engineering Services.</p>
            <br></br>
            <p>The Company specializes in all aspects of steel fabrication and in the construction 
              of pre-engineered steel structural projects.  It encompasses all types of steelwork, 
              cladding, roofing, fabrication, designing, piping systems, bins, tanks and pressure 
              vessels, blasting and painting
            </p>
          </div>

          <AboutServices 
          imgUrl={design} 
          heading="Design and Drafting" 
          text="Extrude Solutions is equipped to do a variety of engineering design work, this include;
          Equipment Specifications, design, selection and inspection
          Computer-based mechanical, structural, civil, electrical, control and instrumentation design, 3D modelling.
          Cost-effective plant layout, with due consideration to maintenance requirements and access"
        />
          <AboutServices 
          imgUrl={fabrication} 
          heading="Fabrication" 
          text="Extrude Solutions is one of the industry providers of structure, piping solutions, storage tanks and vessels for the oil and gas, and power generation industries. Our team is made up of highly experienced and skilled personnel who can expertly streamline even the most complex project from concept to delivery. Extrude Solutions brings qualified manpower, extensive knowledge and professional project management all of which allows us to maximize the cost effectiveness of our custom fabrication solutions."
        />
          <AboutServices 
          imgUrl={construction} 
          heading="Construction" 
          text="Extrude Solution’s commitment to its customers begins with a vast background in construction and erection. The emphasis in the fabrication and construction business is commercial and industrial construction."
        />
          <AboutServices 
          imgUrl={project} 
          heading="Project Management" 
          text="Project Management for Extrude Solutions includes managing capital, maintaining improvement projects, project planning and resource scheduling, preparing budgets, accurate project costing and feasibility studies, as well as implementing projects, while ensuring all processes and procedures comply with statutory requirements. The focus on total quality project management ensures complete client satisfaction."
        />

        <div className='extrude__about-process__others'>
          <h4>Other service areas includes</h4>
          <p>
          <ul>
            <li>Cladding and Framework</li>
            <li>Pre-engineered building / Portable Cabins</li>
            <li>Insulations</li>
            <li>Site Cleaning Services</li>
            <li>Procurement</li>
            <li>LSF Trusses and Roofing</li>
            <li>Provision of certified qualified man-power (Civil Works)</li>
            <li>Mechanical Installation and Structural Rehabillitation</li>
          </ul>
          </p>
        </div>
      </div>

      <div className='content__padding extrude__about-safety'>
        <div className='extrude__about-safety__content'>
          <h2>Safety and Environmental Statement</h2>
          <h3>We Are Safety Compliant</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <p>At Extrude, our Occupational Health and Safety policy are 
            based on the belief that the well-being of the people affected 
            by our work, is the highest priority and must be considered during 
            all work performed.
            <br></br>
            <br></br>
            Extrude is committed to minimising the impact on the environment 
            due to our working activities. We will strive for continual improvement 
            in this area to minimise our impact on the community and other groups 
            who may be affected by our work.</p>
          <br></br>
          <div className='extrude__home-landing__button'>
          <a href='/hse'><Button1 buttontext="HSE Policy"/></a>
          </div>
        </div>
      </div>

      <ContactDetails/>
    </div>
  )
}

export default About