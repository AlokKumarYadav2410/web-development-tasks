import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <h1 className='p-4 text-white text-center text-5xl underline font-bold'>Product Page</h1>

      <Link to="/product/product-details/1" className='px-4 py-2 bg-amber-200 rounded-lg active:scale-95'>View Product Details 01</Link>
      <Link to="/product/product-details/2" className='px-4 py-2 bg-amber-200 rounded-lg active:scale-95'>View Product Details 02</Link>
      <Link to="/product/product-details/3" className='px-4 py-2 bg-amber-200 rounded-lg active:scale-95'>View Product Details 03</Link>
    </div>
  )
}

export default Product
