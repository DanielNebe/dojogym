import React from 'react'
import Features from './Features'
import Offer from './Offer'
import About from './About'
import Contact from './Contact'
import '../src/'

export default function Home() {
  return (  
    <div className="Home">
      <div className="home-section">
        <h2>STEP UP YOUR</h2>
        <h1>FITNESS WITH US</h1>
        <h4>Build Your Body And Fitness With Professional Touch</h4>
        <div className="HomeButton">
          <button className="Hbtn2">JOIN US</button>
        </div>
      </div>
      <div className="home-section FeautureSection">
        <Features />
      </div>
      <div className="home-section OfferSection">
        <Offer />
      </div>
      <div className="home-section AboutSection">
        <About />
      </div>
      <div className="home-section ContactSection">
        <Contact />
      </div>
    </div>
  )
}

