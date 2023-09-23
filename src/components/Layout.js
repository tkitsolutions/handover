import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Footerbar from './Footerbar'
import Content from './Content'

const Layout = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Content>
        <Outlet/>
    </Content>
    <Footer/>
    <Footerbar/>
    </div>
  )
}

export default Layout