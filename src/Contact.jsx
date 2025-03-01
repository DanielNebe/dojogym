import React from 'react'
import './App.css'


export default function Contact() {
  return (
    <div id='Contact'>
        <h1>CONTACT US</h1>
      <form >
        <input type='text' placeholder='Your Name' required/>
        <input type='email'  placeholder='Your Email' required/>
        <textarea placeholder='Write More......' name='message'/>
        <button type='submit' value='Send'>SUBMIT</button>
      </form>                
    </div>     
    
  )
}
