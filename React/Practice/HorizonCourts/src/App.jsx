import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import FirstCard from './Components/FirstCard'
import SecondCard from './Components/SecondCard'
import Cards from './Components/Cards'

const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Hero />
      <About />
      <Cards />
      
    </div>
  )
}

export default App
