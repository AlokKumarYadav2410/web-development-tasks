import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'

const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Navbar title="This is Navbar Title">
        <h2>This is Navbar Children</h2>
      </Navbar>
      <Sections />
      <Footer ><h2>Made with ❤️ by Alokk</h2></Footer>
    </div>
  )
}

export default App
