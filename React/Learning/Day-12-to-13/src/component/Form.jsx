import React, { useState } from 'react'

const Form = ({ changeTheme }) => {

  const [newTheme, setNewTheme] = useState('');

  const changeCurrentTheme = (e) => {
    e.preventDefault();
    changeTheme(newTheme);
    setNewTheme('')
  }


  return (
    <div>
      <h1 className='text-3xl'>Change the theme <span className='font-bold'>{newTheme}</span> by entering any color</h1>
      <form onSubmit={changeCurrentTheme}>
        <input onChange={(e) => setNewTheme(e.target.value)} value={newTheme} type="text" placeholder='Enter your theme' className='border-2 border-gray-300 p-2 rounded-md m-2' />
        {/* <input type="email" placeholder='Enter your email' className='border-2 border-gray-300 p-2 rounded-md m-2'/> */}
        <button type="submit" className='bg-blue-500 text-white p-2 rounded-md m-2 cursor-pointer active:scale-95'>Submit</button>
      </form>
    </div>
  )
}

export default Form
