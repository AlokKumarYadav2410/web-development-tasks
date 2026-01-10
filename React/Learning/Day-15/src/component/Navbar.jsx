import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

const Navbar = ({ menuToggle, handleMenuToggle }) => {
  const value = useContext(ThemeDataContext)

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900/50 backdrop-blur-3xl fixed top-0 w-full z-50 text-white">
      <h2>This is Navbar</h2>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/sections">Sections</Link>
        <Link to="/contact">Contact</Link>
        <button>
          {value.theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden">
        <button onClick={handleMenuToggle}>
          {menuToggle ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-full bg-black/80 backdrop-blur-2xl
          flex flex-col items-center justify-center gap-6 text-white
          transition-all duration-500 ease-in-out
          ${menuToggle ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          lg:hidden
        `}
      >
        <button
          className="absolute top-4 right-4"
          onClick={handleMenuToggle}
        >
          Close
        </button>

        <Link onClick={handleMenuToggle} to="/">Home</Link>
        <Link onClick={handleMenuToggle} to="/sections">Sections</Link>
        <Link onClick={handleMenuToggle} to="/contact">Contact</Link>
        <button>
          {value.theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  )
}

export default Navbar
