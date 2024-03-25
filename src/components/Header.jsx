import React from 'react'
import "./header.css"
import { Typewriter } from 'react-simple-typewriter'

function Header() {
  
  return (
    <header 
     id="header-home">
        <div  className="container">
            <nav id="main-nav">
                <img src="src\assets\images\logo.png" alt="My Portfolio" id="logo" />
                <ul>
                    <li><a href="/" className="current">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/work">Work</a></li>
                    
                </ul>
            </nav>
            <div  className="header-content">
                <h1>
                    I Am Kirollos The  <Typewriter words={["Front-End","Developer"]} />

                </h1>
                <p className="lead">
                    I specialize in front-end development
                </p>
                <a href="work.html" className="btn-light">View My Work</a>
            </div>
        </div>
    </header>
  )
}

export default Header