import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = () => {
  return (
    <div className='headerContainer'>
        <header id='home'>
        {/* <Navbar/> */}
        <Hero/>
        </header>
    </div>
  )
}

export default Header