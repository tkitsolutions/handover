import React from 'react'
import GetInTouch from './GetInTouch'
import Team from './Team'
import WhyChoose from './WhyChoose'
import Projects from './Projects'
import Services from './Services'
import AboutUs from './AboutUs'
import Header from './Header'
const Home = () => {
  return (
    <>
        <Header/>
       <AboutUs/>
       <Services/>
       <Projects/>
       <WhyChoose/>
       <Team/>
       <GetInTouch/>
    </>
  )
}

export default Home