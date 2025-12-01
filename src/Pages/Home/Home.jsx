import React from 'react'
import "./Home.css"
import {Button1, ContactDetails, Services} from '../../Containers'
import { design, fabrication, construction, project, about, project1, project2, project3, project4, project5, project6, agpc, brossette, fosatrade, interkel, gladtrico, vitapur } from '../../Assets';



const Home = () => {
  return (
    <div className=''>

      <div className='content__padding extrude__home-landing'>
        <div className='extrude__home-landing__content'>
          <h1>Creating Innovation Hastens The Future</h1>
          <br></br>
          <hr></hr>
          <br></br>
          <p>We remain a modern provider of Construction and Maintenance services, using the latest technologies.</p>
          <br></br>
          <div className='extrude__home-landing__button'>
          <a href='/gallery'><Button1 buttontext="All Projects"/></a>
          <a href='/about'><Button1 buttontext="About Us"/></a>
          </div>
        </div>
      </div>
      
      <div className='content__padding extrude__home-services'>
        <Services 
          imgUrl={design}
          color='red' 
          heading="Design and Drafting" 
          text="Extrude Solutions is equipped to do a variety of engineering design work, this include; specification drawings, computer aided designs, maintenance design."
          link='/about'
          buttontext='Design'
        />

        <Services 
          imgUrl={fabrication} 
          heading="Fabrication" 
          text="Extrude Solutions is one of the industry providers of structure, piping solutions, storage tanks and vessels for the oil and gas, and power generation industries."
          link='/about'
          buttontext='Fabrication'
        />

        <Services 
          imgUrl={construction} 
          heading="Construction" 
          text="Extrude Solution’s commitment to its customers begins with a vast background in construction and erection."
          link='/about'
          buttontext='Construction'
        />

        <Services 
          imgUrl={project} 
          heading="Project Management" 
          text="Extrude Solutions offers managing capital, maintaining projects, project planning and resource scheduling, preparing budgets, accurate project costing and feasibility studies"
          link='/about'
          buttontext='Project Mgt'
        />
      </div>
      
      <div className='content__padding extrude__home-about'>
        <div className='extrude__home-about__content'>
          <h2>About Us</h2>
          <h3>We Take an Engineering Approach</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <p>Extrude Solutions specializes in all aspects of steel fabrication and in the construction of pre-engineered steel structural projects.  It encompasses all types of steelwork, cladding, roofing, fabrication, designing, piping systems, bins, tanks and pressure vessels, blasting and painting</p>
          <a href='/about'><Button1 buttontext="Learn More"/></a>
        </div>
        <div className='extrude__home-about__image'>
        <img src={about} alt="about"/>
        </div>
      </div>

      <div className='content__padding extrude__home-projects' id='partners'>
        <div className='extrude__home-projects__images'>
          <img src={project1} alt="project"/>
          <img src={project2} alt="project"/>
          <img src={project3} alt="project"/>
          <img src={project4} alt="project"/>
          <img src={project5} alt="project"/>
          <img src={project6} alt="project"/>
        </div>
        <div className='extrude__home-projects__content'>
          <h2>Recent Projects</h2>
          <h3>We Deliver With Great Enthusiasm</h3>
          <br></br>
          <hr></hr>
          <br></br>
          <a href='/gallery'><Button1 buttontext="All Projects"/></a>
        </div>
      </div>

      <div className='content__padding extrude__home-partners'>
        <h2>Global Relationships</h2>
        <h3>Company Partners</h3>
        <br></br>
        <hr></hr>
        <br></br>
        <div className='extrude__home-projects__images'>
          <img src={agpc} alt="partners"/>
          <img src={brossette} alt="partners"/>
          <img src={fosatrade} alt="partners"/>
          <img src={interkel} alt="partners"/>
          <img src={gladtrico} alt="partners"/>
          <img src={vitapur} alt="partners"/>
        </div>
      </div>

      <ContactDetails/>

    </div>
  )
}

export default Home