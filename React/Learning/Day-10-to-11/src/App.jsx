import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Product from './Pages/Product'
import ProductDetails from './components/ProductDetails'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-black/90'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/product-details/:id' element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
