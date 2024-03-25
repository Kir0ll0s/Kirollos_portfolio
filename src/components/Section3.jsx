import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers ,faHourglassStart,faAward,faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import { Typewriter } from 'react-simple-typewriter'
import "./section3.css"
function Section3() {
  return (
    <section id="home-b" className="text-center py-2">
      <div className="stats">
        <div>
          <ul>
            <li><FontAwesomeIcon id="icons" icon={faUsers} /></li>
           <li className="stats-title">Clients</li>
            <li className="stats-number">100</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><FontAwesomeIcon id="icons" icon={faAward} /></li>
            <li className="stats-title">Awards</li>
            <li className="stats-number">3</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><FontAwesomeIcon id="icons" icon={faHourglassStart} /></li>
            <li className="stats-title">Hours Worked</li>
            <li className="stats-number">3500</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><FontAwesomeIcon id="icons" icon={faCodeBranch} /></li>
            <li className="stats-title">Projects Completed</li>
            <li className="stats-number">135</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Section3