import React from 'react'
import landing from '../assets/landing.jpg'

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={landing}
          alt="Landing"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-2xl">
            Discover amazing content and connect with us!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
