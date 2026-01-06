import React, { useState } from 'react'
import Form from './component/Form'

const App = () => {
  const [theme, setTheme] = useState('light')

  const changeTheme = (newTheme) => {
    if (newTheme === '') return;
    if (newTheme === 'dark' || newTheme === 'black' || newTheme === 'light' || newTheme === 'white') {
      setTheme(newTheme);
      return;
    }
    setTheme(newTheme.toLowerCase());
  }

  return (
    <div className={`min-h-screen p-4 space-y-4 `} style={{ backgroundColor: `${theme === 'dark' || theme === 'black' ? '#1a202c' : theme === 'light' || theme === 'white' ? '#ffffff' : theme}` }}>
      <h1 className='text-3xl'>Change the theme <span className='font-bold'>{theme}</span> by entering any color</h1>
      <Form changeTheme={changeTheme} />
    </div>
  )
}

export default App
