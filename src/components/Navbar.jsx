import React from 'react'
import react_icon from '../images/react-icon-small.png'
import '../App.css'

const Navbar = (props) => {
  return (
      <nav className={props.darkMode? "dark":""}>
          <img src={react_icon} className='nav--logo_icon' />
          <h3 className='nav--logo-text'>React Facts</h3>
          <div className="toggler">
              <p className='toggler--light'>Light</p>
              <div className="toggler--slider" onClick={props.toggleDarkMode}>
                  <div className="toggler--slider--circle"></div>
              </div>
              <p className='toggler--dark'>Dark</p>
              
          </div>
    </nav>
  )
}

export default Navbar