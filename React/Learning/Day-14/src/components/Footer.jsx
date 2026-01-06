import React from 'react'

const Footer = ({ children }) => {
    console.log(children)
    return (
        <div className='w-full p-4 bg-emerald-400 mt-auto'>
            Footer
            {children}
        </div>
    )
}

export default Footer
