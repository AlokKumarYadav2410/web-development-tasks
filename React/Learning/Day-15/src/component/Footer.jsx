import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
    const value = useContext(ThemeDataContext);
  return (
    <div className='bg-gray-200 p-4 mt-auto'>
      {`This is Footer - Current Theme is ${value.theme}`}
    </div>
  )
}

export default Footer
