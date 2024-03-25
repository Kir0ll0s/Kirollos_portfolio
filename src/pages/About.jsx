import React from 'react'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'
import Companies from '../components/Companies'
import Testimonials from '../components/Testimonials'
import Fotter from '../components/Fotter'
function About() {
  return (
    <>
    <header id="header-inner">
      <div className="container">
          <nav id="main-nav">
              <img src="src\assets\images\logo.png" alt="My Portfolio" id="logo" />
              <ul>
                  <li><a href="/home" >Home</a></li>
                  <li><a href="/about" className="current">About</a></li>
                  <li><a href="/work">Work</a></li>
                  
              </ul>
          </nav>
      </div>
    </header>
    <Aboutme></Aboutme>
    <Skills></Skills>
    <Companies></Companies>
    <Testimonials></Testimonials>
    <Fotter></Fotter>


    </>
        
  
  )
}

export default About