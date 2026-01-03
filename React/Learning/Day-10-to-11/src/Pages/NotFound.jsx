import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-black flex justify-center items-center'>
      <h1 className='p-8 text-red-500 text-center text-6xl font-bold'>404: Page Not Found</h1>
      <Link to="/" className='absolute bottom-10 text-white text-center text-lg underline'>Go to Home</Link>
    </div>
  )
}

export default NotFound
