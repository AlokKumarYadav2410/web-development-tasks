import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import { useState } from 'react';
import Sections from './component/Sections';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import Section1 from './component/Section1';
import axios from 'axios';
import Products from './component/Products';
import ProductDetails from './component/ProductDetails';

const App = () => {

  const [menuToggle, setMenuToggle] = useState(false);
  const [products, setProducts] = useState([]);

  function handleMenuToggle() {
    setMenuToggle(!menuToggle);
  }

  async function getData() {
    let data = await axios('https://fakestoreapi.com/products');
    setProducts(data.data);
    console.log(data.data)
  }

  useEffect(() => {
    getData();
  },[])
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
        <Route path='/products' element={<Products products={products} />} />
        <Route path='/products/product-detail/:id' element={<ProductDetails products={products} />} />
        {/* <Route path='/sections/:id' element={<Section1 />} /> */}
        <Route path='*' element={<h2>404 Not Found</h2>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
