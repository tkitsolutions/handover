import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './styles.scss';
import Hero from './components/Hero';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChoose from './components/WhyChoose';
import Team from './components/Team';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Footerbar from './components/Footerbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import ContactUs from './components/ContactUs';
import Content from './components/Content';
import Home from './components/Home';
import NewTeam from './components/NewTeam';
import ClientReviews from './components/ClientReviews';
import UserReviews from './components/UserReviews';
import {ThemeProvider} from 'react-styled-components'

const App = () => {

  return (
    <div className='app'>
      <Navbar/>
     <Header/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <WhyChoose/>
    <UserReviews/>
      <NewTeam/>
      <ContactUs/>
      <Footer/>
      <Footerbar/>
    </div>


/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
    |<Route index element={<Home/>}/>
    |<Route path='/contactus' element={<ContactUs/>}/>
  </Route>
</Routes>
</BrowserRouter> */
  )
}

export default App