import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  console.log(props)
  return (
    <div className='w-full bg-blue-400 p-4'>
      {props.title}
      {props.children}
      <Link to="/" className='mr-4 text-white font-bold'>Home</Link>
      <Link to="/sections" className='text-white font-bold'>Sections</Link>
    </div>
  )
}

export default Navbar
