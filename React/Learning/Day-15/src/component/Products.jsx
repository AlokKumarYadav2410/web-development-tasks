import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = ({ products }) => {
    const navigate = useNavigate();
    return (
    <div className='mt-14 bg-amber-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4'>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/products/product-detail/${product.id}`)}
          className="relative overflow-hidden border rounded-2xl bg-white shadow-black shadow-md h-60 w-60 group hover:shadow-lg transition-all duration-300"
        >
          {/* Image */}
          <div className='w-full h-full '>
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-full object-fit object-center hover:scale-105 transition-all duration-300'
            />
          </div>

          {/* Hover Content */}
          <div className='absolute bottom-[-100%] left-0 w-full bg-black/20 border-t-gray-400 p-3
                          transition-all duration-300 group-hover:bottom-0'>
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
