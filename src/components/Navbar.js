import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg';
import logo2 from '../assets/logoblue.svg';
import {FaBars} from 'react-icons/fa'

const Navbar = ({handleContactUs,showHome}) => {

    const[navbar,setNavbar]=useState(false);
    const[navbar2,setNavbar2]=useState(false);
    const[burger,setBurger]=useState(false);


    const changeNavbar=()=>{

        if(window.scrollY>20)
         setNavbar(true);
        else 
        setNavbar(false);
       
    }

    const handleClick=()=>{
         //   setNavbar(true);
        const x=document.getElementById("menu_items2");
        if (x.style.display === "none") {
          x.style.display = "block";
          setNavbar2(true);
        } else {
          x.style.display = "none";
          setNavbar2(false);
        }
    
      }


    
    window.addEventListener('scroll',changeNavbar);
  return (
    <nav className={navbar?'sticky':navbar2?'sticky':''}>
        <div className='navbar'>
        <div className='nav__logo' onClick={()=>{document.getElementById('home').scrollIntoView({behavior:"smooth"})}}>
           {navbar||navbar2?<img src={logo2} alt='LOGO-NOT-FOUND'/>:
            <img src={logo} alt='LOGO-NOT-FOUND'/>}
        </div>
        <div className='nav__menu'>
            <ul id='menu_items'>
                <li><a onClick={()=>{document.getElementById('home').scrollIntoView({behavior:"smooth"})}}>Home</a></li>
                <li><a onClick={()=>{document.getElementById('aboutus').scrollIntoView({behavior:"smooth"})}}>About Us</a></li>
                <li><a onClick={()=>{document.getElementById('services').scrollIntoView({behavior:"smooth"})}}>Services</a></li>
                <li><a onClick={()=>{document.getElementById('projects').scrollIntoView({behavior:"smooth"})}}>Projects</a></li>
                <button onClick={()=>{document.getElementById('contactus').scrollIntoView({behavior:"smooth"})}}>
                Get a Quote
               </button>
            </ul>
            <ul id='menu_items2'>
                <li><a onClick={()=>{document.getElementById('home').scrollIntoView({behavior:"smooth"}); handleClick();}}>Home</a></li>
                <li><a onClick={()=>{document.getElementById('aboutus').scrollIntoView({behavior:"smooth"}); handleClick();}}>About Us</a></li>
                <li><a onClick={()=>{document.getElementById('services').scrollIntoView({behavior:"smooth"}); handleClick();}}>Services</a></li>
                <li><a onClick={()=>{document.getElementById('projects').scrollIntoView({behavior:"smooth"}); handleClick();}}>Projects</a></li>
                <button onClick={()=>{document.getElementById('contactus').scrollIntoView({behavior:"smooth"}); handleClick();}}>
                Get a Quote
               </button>
            </ul>
            <FaBars className='nav__menu--icon' onClick={handleClick}/>
            <button onClick={()=>document.getElementById('contactus').scrollIntoView({behavior:"smooth"})}>
                Get a Quote
            </button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar