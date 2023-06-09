import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Heroimg2 from '../components/Heroimg2'
import AboutContent from '../components/AboutContent'
import Certification from '../components/Certification'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="Im a Friendly front-End Developer."/>
      <AboutContent/>
      <Certification/>
      <Footer/>
    </div>
  )
}

export default About