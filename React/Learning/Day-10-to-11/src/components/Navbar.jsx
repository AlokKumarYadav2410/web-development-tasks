import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-white bg-gray-800/90 backdrop:blur-lg py-6 px-12'>
      <h1 className='text-2xl'>Navbar</h1>
      <div className='flex gap-6'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
