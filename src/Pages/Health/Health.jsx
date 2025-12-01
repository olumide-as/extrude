import React from 'react'
import { healthbg } from '../../Assets'
import { Landing } from '../../Containers'
import './Health.css'

const Health = () => {
  return (
    <div>
      <Landing 
      heading="Health, Safety And Environment" 
      subheading='Safety Matters' 
      text='Wellbeing of the people affected by our work and impact on the environment'
      bg={healthbg}
      />

      <div className='content__padding extrude__health'>
        <div className='extrude__health-safety'>
            <h4>Safety Statement</h4>
            <br></br>
            <hr></hr>
            <br></br>
            <p>At Extrude, our Occupational Health and Safety policy are based on
                 the belief that the well-being of the people affected by our work,
                  is the highest priority and must be considered during all work performed.
                <br></br>
                <br></br>
                Our staff are our most important asset and their health and safety
                 are our most significant responsibility.
                <br></br>
                <br></br>
                The management of Extrude is totally committed to providing and
                 maintaining a safe and healthy working environment.
                <br></br>
                <br></br>
                Our health and safety policies are the documented principles, objectives,
                 obligations and commitments that guide our decision-making within our business
            </p>
        </div>

        <div className='extrude__health-environment'>
            <h4>Environmental Statement</h4>
            <br></br>
            <hr></hr>
            <br></br>
            <p>Extrude is committed to minimising the impact on the environment 
                due to our working activities. We will strive for continual improvement 
                in this area to minimise our impact on the community and other groups who 
                may be affected by our work.
                <br></br>
                <br></br>
                Extrude will carry out all activities in a manner that provides consideration 
                of the environment and the health and well-being of those involved.
                <br></br>
                <br></br>
                We will cooperate with relevant authorities and clients to meet statutory 
                and contractual requirements
                <br></br>
                <br></br>
                At Extrude, every individual is responsible for providing a healthy, safe and environmentally clean workplace.
            </p>
        </div>

      </div>

    </div>
  )
}

export default Health