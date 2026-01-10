import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import { useState } from 'react';
import Sections from './component/Sections';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

const App = () => {

  const [menuToggle, setMenuToggle] = useState(false);

  function handleMenuToggle() {
    setMenuToggle(!menuToggle);
  }

  console.log("hello")

  return (
    <div className='w-full min-h-screen flex flex-col'>
      {/* <Navbar menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
      <Sections />
      <Footer /> */}
      {/* <RouterProvider router={router} /> */}
      <Navbar menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/sections' element={<Sections />} />
        <Route path='*' element={<h2>404 Not Found</h2>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
