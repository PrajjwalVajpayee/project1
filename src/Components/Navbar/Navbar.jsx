import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
 
   const [sticky,setSticky] =useState(false);
   useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >750 ? setSticky(true) :setSticky(false); 
    })
   },[]); 
  
   const [mobmenu, setMobMenu] =useState(false);
 const toogleMenu= ()=>{
  mobmenu ? setMobMenu(false) : setMobMenu(true)
 }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' alt="" />
      <ul className={mobmenu ? '' :'hide-mob-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>Home</li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar
