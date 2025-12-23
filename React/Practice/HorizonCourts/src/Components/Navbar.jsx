import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div><h1>Horizon Courts</h1></div>
      <div className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Coaches</a>
        <a href="#">Events</a>
        <a href="#">Contact</a>
      </div>
      <div className="btn">Book Now <i className="ri-arrow-right-up-line"></i> </div>
    </div>
  )
}

export default Navbar
