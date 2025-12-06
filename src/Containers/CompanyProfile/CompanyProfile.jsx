import React from 'react'
import "./CompanyProfile.css"
import companyProfilePdf from "../../Assets/company-profile.pdf"
import Button1 from '../Button1/Button1'

const CompanyProfile = () => {
  return (
    <div>
      <div className='content__padding extrude__company-profile'>
        <div className='extrude__company-profile__heading'>
          <h2>Our Brochure</h2>
          <h3>Explore our full company profile</h3>
          <br />
          <hr />
        </div>

        <div className='extrude__company-profile__cta'>
          <a href={companyProfilePdf} target="_blank" rel="noopener noreferrer">
            <Button1 buttontext="View or Download PDF" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile