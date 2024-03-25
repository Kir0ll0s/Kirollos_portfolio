import React from 'react'

function Skills() {
    const html={width:"100%"}
    const css={width:"100%"}
    const js={width:"90%"}
    const react={width:"80%"}
    const Bootstrap={width:"100%"}
    const Photoshop={width:"90%"}
    const manual={width:"100%"}
    const automation={width:"80%"}
  return (
    <section id="about-b" className="bg-dark py-3">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="bottom-line"></div>

        <h4>HTML&HTML5</h4>
        <div className="progress">
          <div data-aos="zoom-out-left" style={html}></div>
        </div>

        <h4>CSS&CSS3</h4>
        <div className="progress">
          <div data-aos="zoom-out-left" style={css}></div>
        </div>

        <h4>JavaScript:</h4>
        <div className="progress">
          <div data-aos="zoom-out-left" style={js}></div>
        </div>

        <h4>React.js</h4>
        <div className="progress">
          <div data-aos="zoom-out-left" style={react}></div>
        </div>

        <h4>Bootstrap</h4>
        <div className="progress">
          <div data-aos="zoom-out-left" style={Bootstrap}></div>
        </div>

        <h4>Photoshop</h4>
        <div className="progress">
          <div data-aos="zoom-out-left" style={Photoshop}></div>
        </div>

        <h4>manual testing</h4>
        <div className="progress">
          <div data-aos="zoom-out-left" style={manual}></div>
        </div>

        <h4>automation testing</h4>
        <div className="progress">
          <div data-aos="zoom-out-left" style={automation}></div>
        </div>

      </div>
    </section>
  )
}

export default Skills