import React, { useState } from 'react'
import Form from './component/Form'

const App = () => {
  const [theme, setTheme] = useState('dark')

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }


  return (
    <div className='min-h-screen bg-gray-900 text-white p-4 space-y-4'>
      <h1 className='text-3xl'>Change the theme {theme}</h1>
      <Form changeTheme={changeTheme}/>
    </div>
  )
}

export default App
