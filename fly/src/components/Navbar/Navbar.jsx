import React, { useState } from 'react'
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

import logo from '../../assets/logo.png'

const Navbar = () => {


  //remove or add navbar on small screens
  const [active, setActive] = useState('');
  const toggleNavBar = () => {
    setActive(!active); // Перемикаємо стан
  }

  //second navbar
  const [noBg, addBg] = useState('navBarTwo');
  const addBgColor = () => {
    if(window.scrollY >= 10){
      addBg('navBarTwo navbarWithBg'); // Перемикаємо стан
    }else{
      addBg('navBarTwo'); // Перемикаємо стан
    }
  }
  window.addEventListener('scroll', addBgColor)


  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
          <SiConsul/>
        </div>

        <div className='none flex'>
          <li className='flex'> <BsPhoneVibrate className='icon'/>Support</li>
          <li className='flex'> <AiOutlineGlobal className='icon'/>Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>

      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} alt='logo' className='logo'/>
        </div>

        <div className={`navBarMenu ${active ? 'showNavBar' : ''}`}>
          <ul className='menu flex'>
            <li onClick={toggleNavBar} className='listItem'>Home</li>
            <li onClick={toggleNavBar} className='listItem'>About</li>
            <li onClick={toggleNavBar} className='listItem'>Offers</li>
            <li onClick={toggleNavBar} className='listItem'>Seats</li>
            <li onClick={toggleNavBar} className='listItem'>Destinations</li>

          </ul>
          <button onClick={toggleNavBar} className='btn flex btnOne'>
            Contact
          </button>
        </div>

        <button className='btn flex btnTwo'>
          Contact
        </button>

        <div onClick={toggleNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon'/>
        </div>

        
      </div>
    </div>
  )
}

export default Navbar