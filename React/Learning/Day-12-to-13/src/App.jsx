import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './component/Form'
import Parent from './component/Parent';
import Navbar from './component/Navbar';

const App = () => {

  const [theme, setTheme] = useState('light');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [login, setLogin] = useState(localStorage.getItem('login') === 'true' ? true : false);

  const [loginModal, setLoginModal] = useState(false);

  const [checkDetail, setCheckDetail] = useState(localStorage.getItem('login') === 'true' ? true : false);

  const changeTheme = (newTheme) => {
    if (newTheme === '') return;
    if (newTheme === 'dark' || newTheme === 'black' || newTheme === 'light' || newTheme === 'white') {
      setTheme(newTheme);
      return;
    }
    setTheme(newTheme.toLowerCase());
  }

  const changeModal = (modalVal, msgValue = '') => {
    setMessage(msgValue);
    setModal(modalVal)
  }

  const handleDetailCheck = (e) => {
    setCheckDetail(e.target.checked);
  }

  function handleLoginModal(e) {
    e.preventDefault();

    if (name === '' || password === '') {
      changeModal(true, 'Please fill all the fields');
      return;
    }

    if (name === "Alok" && password === "123") {
      localStorage.setItem('login', true);
      setCheckDetail(true)
      setLogin(true);
      setLoginModal(false);
    } else {
      localStorage.setItem('login', false);
      changeModal(true, 'Enter valid credentials');
    }
    setName('');
    setPassword('');
  }

  console.log(message)

  return (
    <>
      {modal && (
        <div className='absolute z-50 flex justify-center items-center w-full h-screen bg-black/50 backdrop-blur-2xl'>
          <div className='flex flex-col justify-center items-center gap-4 bg-gray-800/50 border rounded-lg text-white border-gray-200 p-4 shadow-2xl'>
            <p>{message}</p>
            <button onClick={() => changeModal(false)} className='p-2 px-3 bg-blue-500 rounded-lg active:scale-95 cursor-pointer'>OK</button>
          </div>
        </div>
      )}

      {/* {
        login && (
          <div className='fixed top-24 right-4 bg-white border p-4 rounded-lg shadow-lg'>
            <label className='flex items-center gap-2'>
              <input type="checkbox" checked={checkDetail} onChange={handleDetailCheck} />
              <span>Show Details</span>
            </label>
          </div>
        )
      } */}

      {
        loginModal && <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center'>
          <div onClick={() => setLoginModal(false)} className='absolute z-20 flex justify-center items-center w-full h-screen bg-black/50 backdrop-blur-2xl'>
          </div>
          <form onSubmit={(e) => handleLoginModal(e)} className='absolute z-30 flex flex-col gap-4 justify-center items-center bg-gray-800/50 border rounded-lg text-white border-gray-200 p-4 shadow-2xl'>
            <h2 className='font-semibold text-3xl tracking-wide'>Login</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name' className='border p-2 rounded-sm' />
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter password' className='border p-2 rounded-sm' />
            <button type='submit' className='p-2 px-3 w-fit bg-blue-500 rounded-lg active:scale-95 cursor-pointer'>Submit</button>
          </form>
        </div>
      }


      {login && checkDetail ? (
        <div style={{ backgroundColor: `${theme === 'dark' || theme === 'black' ? '#1a202c' : theme === 'light' || theme === 'white' ? '#ffffff' : theme}` }}>
          <Navbar login={login} setLogin={setLogin} />

          <div className='min-h-screen p-4 space-y-4 pt-20'>

            <Routes>
              <Route path='/' element={<h1 className='text-5xl fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-center text-gray-800'>Welcome to the Home Page</h1>} />
              <Route path='/form' element={<Form changeTheme={changeTheme} />} />
              <Route path='/passing' element={<Parent changeModal={changeModal} />} />
            </Routes>
            {/* <Form changeTheme={changeTheme} /> */}
          </div>

        </div>
      ) : (
        <div className='w-full min-h-screen flex justify-center items-center bg-gray-100'>
          <button onClick={() => setLoginModal(true)} className='p-4 bg-green-500 text-white rounded-lg active:scale-95 cursor-pointer'>Login to Continue</button>
        </div>
      )}
    </>
  )
}

export default App
