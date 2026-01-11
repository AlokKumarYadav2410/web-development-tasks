import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';
import Section1 from './Section1';
import { Outlet } from 'react-router-dom';

const Sections = () => {
    const value = useContext(ThemeDataContext);
  return (
    <div className='flex-1 bg-amber-200 mt-14'>
      <h2>This is {value.theme} theme</h2>
      <p>Visit our other sections to explore more.</p>
      <Section1 theme={value.theme} />
      {/* <Outlet /> */}
    </div>
  )
}

export default Sections
