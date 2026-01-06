import React from 'react'

const Navbar = (props) => {
  console.log(props)
  return (
    <div className='w-full bg-blue-400 p-4'>
      {props.title}
      {props.children}
    </div>
  )
}

export default Navbar
