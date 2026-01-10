import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';
import Section1 from './Section1';

const Sections = () => {
    const value = useContext(ThemeDataContext);
  return (
    <div className='flex-1 bg-amber-200'>
      <Section1 theme={value.theme} />
    </div>
  )
}

export default Sections
