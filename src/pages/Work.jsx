import React from 'react'
import Fotter from '../components/Fotter'
import Mywork from '../components/Mywork'

function Work() {
  return (
    <>
    <header id="header-inner">
      <div className="container">
          <nav id="main-nav">
              <img src="src\assets\images\logo.png" alt="My Portfolio" id="logo" />
              <ul>
                  <li><a href="/home" >Home</a></li>
                  <li><a href="/about" >About</a></li>
                  <li><a href="/work" className="current">Work</a></li>
                  
              </ul>
          </nav>
      </div>
    </header>


    <Mywork></Mywork>

    <Fotter></Fotter>
    </>
  )
}

export default Work