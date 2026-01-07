import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ login, setLogin }) => {
    const styles = `hover:bg-black p-2 cursor-pointer rounded-md transition-all duration-200`
    const activeStyles = `active-link p-2 hover:text-white cursor-pointer rounded-md transition-all duration-200`
  return (
    <div className='fixed w-full h-20 flex justify-between items-center p-4 bg-gray-900/90 backdrop-blur-2xl text-white'>
      <p className='text-2xl font-semibold'>Lifting State Up</p>
      <div className='flex gap-4'>

        <NavLink to="/" className={({isActive}) => isActive ? activeStyles : styles}>Home</NavLink>
        <NavLink to="/form" className={({isActive}) => isActive ? activeStyles : styles}>Theme Changer</NavLink>
        <NavLink to="/passing" className={({isActive}) => isActive ? activeStyles : styles}>Passing</NavLink>
        {login ? <button className={styles} onClick={() => { setLogin(false); localStorage.setItem('login', 'false'); }}>Logout</button> : <button onClick={() => setLogin(true)}>Login</button>}
      </div>
    </div>
  )
}

export default Navbar
