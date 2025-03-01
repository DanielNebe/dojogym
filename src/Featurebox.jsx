import React from 'react'
import './App.css'


export default function Featurebox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2>{props.litle}</h2>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
