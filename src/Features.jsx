import React from 'react'
import './App.css'
import Featurebox from './Featurebox';
import FT1 from './assets/1.svg';
import FT2 from './assets/2.svg';
import FT3 from './assets/3.svg';
import FT4 from './assets/4.svg';



export default function Features() {
  return (
    <div id= 'features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
          <Featurebox image={FT1} text="Weight lifting"  />
          <Featurebox image={FT2} text="Specific Muscles" />
          <Featurebox image={FT3} text="Flex Your Muscles" />
          <Featurebox image={FT4} text="Cardio Exercise" />
        </div>
    </div>
  );
}
