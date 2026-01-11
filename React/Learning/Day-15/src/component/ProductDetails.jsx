import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    return (
        <div>
            {products.find(pro => pro.id === parseInt(id))?.id ? (
                <div className='mt-14 p-4'>
                    <h2 className='font-bold text-2xl mb-4'>Product Details</h2>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <img
                            src={products.find(pro => pro.id === parseInt(id)).image}
                            alt={products.find(pro => pro.id === parseInt(id)).title}
                            className='w-64 h-64 object-fit object-center'
                        />
                        <div>
                            <h3 className='font-bold text-xl mb-2'>
                                {products.find(pro => pro.id === parseInt(id)).title}
                            </h3>
                            <p className='mb-2'>
                                {products.find(pro => pro.id === parseInt(id)).description}
                            </p>
                            <p className='font-bold text-lg'>
                                Price: ${products.find(pro => pro.id === parseInt(id)).price}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className='mt-14 p-4'>Product not found.</h2>
            )
            }
        </div>
    )
}

export default ProductDetails
