import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract,faDisplay,faObjectUngroup,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import "./specialize.css";
function Specialize() {
  return (
    <section id="home-a" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">I Specialize In</h2>
        <div className="bottom-line"></div>
        <p className="lead">
        Front End development and software testing special websites </p>
        <div className="specials">
          <div>
          <FontAwesomeIcon id='ico' icon={faFileContract} />
          
            <h3>Concepting</h3>
            <p>
            I have a keen eye for concepting innovative ideas. From brainstorming unique concepts to translating them into visually appealing designs, I bring creativity and originality to every project
            </p>
          </div>
          <div>
          <FontAwesomeIcon id='ico' icon={faDisplay} />
            
            <h3>UI/UX</h3>
            <p>
            My expertise lies in creating intuitive interfaces that seamlessly adapt to various devices and screen sizes, ensuring a smooth and enjoyable user experience across all platforms.
            </p>
          </div>
          <div>
         <FontAwesomeIcon id='ico' icon={faObjectUngroup} />
           
            <h3>Visual Design</h3>
            <p>
            possess a deep understanding of visual design principles. For selecting the perfect color palette to crafting engaging typography, I am dedicated to creating visually stunning websites            </p>
          </div>
          <div>
          <FontAwesomeIcon id='ico' icon={faThumbsUp} />
            
            <h3>Interaction</h3>
            <p>
            I leverage my expertise in interaction design to create dynamic and intuitive interfaces that guide users seamlessly through their digital journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specialize