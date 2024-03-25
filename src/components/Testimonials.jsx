import React from 'react'

function Testimonials() {
  return (
    <section id="about-d" class="py-4">
      <div class="container">
        <h2 class="section-title">Testimonials</h2>
        <div class="bottom-line"></div>
        <p class="lead text-center">Take a look at what my clients say...</p>
        <div class="testimonials">
          <div data-aos="zoom-in" >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates officiis quia nostrum nam ab vel laudantium, ea,
              corrupti culpa illum soluta ipsam eos, eius ad error voluptate
              sint? Non, fugit!
            </p>
            <ul>
              <li><img src="./src\assets\images\person1.jpg" alt="" /></li>
              <li>Sam Smith, New York</li>
            </ul>
          </div>

          <div data-aos="zoom-in-up">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates officiis quia nostrum nam ab vel laudantium, ea,
              corrupti culpa illum soluta ipsam eos, eius ad error voluptate
              sint? Non, fugit!
            </p>
            <ul>
              <li><img src="./src\assets\images\person2.jpg" alt="" /></li>
              <li>Sara Williams, Michigan</li>
            </ul>
          </div>
          <div data-aos="zoom-in">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates officiis quia nostrum nam ab vel laudantium, ea,
              corrupti culpa illum soluta ipsam eos, eius ad error voluptate
              sint? Non, fugit!
            </p>
            <ul>
              <li><img src="./src\assets\images\person3.jpg" alt="" /></li>
              <li>Jill Johnson, London</li>
            </ul>
          </div>
          <div data-aos="zoom-in-up">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates officiis quia nostrum nam ab vel laudantium, ea,
              corrupti culpa illum soluta ipsam eos, eius ad error voluptate
              sint? Non, fugit!
            </p>
            <ul>
              <li><img src="./src\assets\images\person4.jpg" alt="" /></li>
              <li>Steve Thompson, Boston</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Testimonials.propTypes = {}

export default Testimonials
