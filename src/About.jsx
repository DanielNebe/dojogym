import React from 'react';
import aboutImage from './assets/about.png';
import './App.css'

export default function About() {
  return (
    <div id ='About'>
        <div className='About-image'>
          <img src={aboutImage} alt='A'/>
        </div>
        <div className='About-text'>
            <h1>LEARN MORE ABOUT US</h1>

            <p>Unique Experiences Tailored to Your Lifestyle. Our Timetable offers a wide range of low to high
            intensity fitness programmes to suit your fitness lifestyle. Tbere is something for everyone</p>

            <button>READ MORE</button>
        </div>
      
    </div>
  )
}
