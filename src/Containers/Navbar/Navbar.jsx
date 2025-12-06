import React , { useState } from 'react'
import { NavLink} from "react-router-dom";
import logo from '../../Assets/extrude.jpg';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./Navbar.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = () => {

 //toggle menu
  const [toggleMenu, SetToggleMenu] = useState(false);

  // menu funcction
  const Menu = () => (
    <>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/about" >About Us</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact" >Contact Us</NavLink>
  
    </>
  )        

  return (
    <div><ToastContainer />
    <div className="content__padding extrude__navbar">
                      

      <div className='extrude__navbar-logo'>
      <img src={logo} alt="logo" />
      </div>

      <div className='extrude__navbar-links'>
        <Menu/>
      </div>

      <div className="extrude__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color="#000" size={32} onClick={() => SetToggleMenu(false)}/>
            : <RiMenu3Line color="#000" size={32} onClick={() => SetToggleMenu(true)}/>
          }
          {toggleMenu && (
              <div className="extrude__navbar-menu__container scale-up-tr">
                <div className="extrude__navbar-menu__container-links">
                  <Menu />
                </div>
              </div>
          )
          }
      </div> 

    </div>
    </div>
  )
}

export default Navbar