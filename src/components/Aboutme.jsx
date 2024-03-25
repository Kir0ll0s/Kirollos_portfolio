import React, { useEffect } from 'react'
import "./about.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
function Aboutme() {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <section id="about-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Let me tell you a little about myself and what I do...
        </p>
        <div className="about-info">
          <img data-aos="flip-left" src="./src\assets\images\about.jpg" alt="" className="bio-image" />
          <div data-aos="fade-left" className="bio bg-light">
            <h4>Your Project Is In Safe Hands</h4>
            <p className='aboutMeInfo'>
            Hey there, I'm KIROLLOS, a versatile professional bridging the realms of front-end development and software testing. Armed with a Management Information Systems degree, I've cultivated a deep understanding of digital systems and their seamless integration into business operations.

            As a front-end developer, I specialize in transforming concepts into visually stunning and user-friendly interfaces. With mastery over HTML, CSS, and JavaScript, I craft engaging websites and applications that captivate and convert.

            My journey has also led me into the realm of software testing, where I've honed my attention to detail and commitment to excellence. At Promina Agency, I've had the privilege of ensuring the quality and functionality of projects, blending my testing skills seamlessly with my front-end expertise.

            Driven by a passion for innovation and a dedication to continuous learning, I thrive in dynamic environments where creativity meets precision. Let's collaborate to bring your digital vision to life with flair!
            </p>
          </div>
          <div data-aos="fade-right" className="award-1">
          <i class="fas fa-solid fa-graduation-cap fa-3x"></i>
            <h3>PHP full-stack Diploma</h3>
            <p>
            I've successfully completed a PHP Full-Stack Diploma program, equipping me with comprehensive skills in both front-end and back-end development
            </p>
          </div>
          <div data-aos="fade-down" className="award-2">
          <i class="fas fa-solid fa-graduation-cap fa-3x"></i>
            <h3>management information system</h3>
            <p>
            I hold a Management Information Systems degree with distinction, reflecting my dedication to academic excellence and proficiency in leveraging technology for organizational success
            </p>
          </div>
          <div data-aos="fade-left" className="award-3">
          <i class="fas fa-solid fa-graduation-cap fa-3x"></i>

            <h3>Award Three</h3>
            <p>
            I've applied my front-end development skills effectively during my tenure at Sync Intern's, where I contributed to various projects, enhancing user experiences and interface designs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme