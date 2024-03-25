import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileLines,faDesktop,faObjectUngroup ,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
function Creative() {
  return (
    <section id="home-c" class="text-center py-2">
      <div class="container">
        <h2 class="section-title">
          My Creative Process
        </h2>
        <div class="bottom-line"></div>
        <p class="lead">
          All of my UI/UX and design projects are based off of a practiced
          formula to get the result that I am looking for
        </p>
        <div class="process">
          <div>
          {/* process-icon */}
            <FontAwesomeIcon icon={faFileLines} className="process-icon" />
        
            
            <h3>Discuss The Project</h3>
            <p>
            Project discussion involves open communication, collaboration, and stakeholder engagement for informed and successful outcomes.
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faDesktop} className="process-icon" />              
            
            <h3>Brainstorming ^ Concept</h3>
            <p>
            Brainstorming sessions fuel innovative concepts, shaping projects with creativity and strategic thinking.
            </p>
          </div>
          <div>
          <FontAwesomeIcon icon={faObjectUngroup} className="process-icon" />
            <h3>UI/UX Planning</h3>
            <p>
            Strategic UI/UX planning ensures seamless user experiences, prioritizing functionality, accessibility, and aesthetic appeal.
            </p>
          </div>
          <div>
          <FontAwesomeIcon icon={faThumbsUp} className="process-icon" />
            <h3>Interaction</h3>
            <p>
            Engaging interactions enhance user experience, guiding seamless navigation and fostering meaningful engagement with the interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Creative