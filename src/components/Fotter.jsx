import React from 'react'

import "./fotter.css"
function Fotter() {
  return (
    <footer id="main-footer">
      <div class="footer-content container">
        <p>Copyright &copy; 2024. All Rights Reserved</p>
        <div class="social">
          <a href="https://github.com/Kir0ll0s" className='fab'><i className="fa-brands fa-github"></i></a>
          <a href="https://www.facebook.com/koko.pasha.7" className='fab'><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/3apsaid/" className='fab'><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/kirollos-hanna-bb3a0b243/" className='fab'><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Fotter