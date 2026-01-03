import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { kuchBhi } = useParams();
    return (
        <div className='flex flex-col items-center gap-2'>
            <h1 className='p-4 text-white text-center text-5xl font-bold'>Product Details Page</h1>
            <p className=' text-white text-center text-lg'>Product Details for Product ID: {kuchBhi}</p>
            <Link to="/product" className=' text-white text-center text-lg underline'>Back to Products</Link>
        </div>
    )
}

export default ProductDetails
