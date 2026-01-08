import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar title="This is Navbar Title">
        <h2>This is Navbar Children</h2>
      </Navbar>,
    },
    {
      path: '/sections',
      element: <Sections />
    }
  ]);
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <RouterProvider router={routes} />
      <Footer ><h2>Made with ❤️ by Alokk</h2></Footer>
    </div>
  )
}

export default App
