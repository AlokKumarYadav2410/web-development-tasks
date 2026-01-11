import React from 'react'
import { useParams } from 'react-router-dom'

const Section1 = ({ theme }) => {
  const {id} = useParams();
  console.log(id)
  return (
    <div>
      <h2>This is the theme that we are getting from parent {theme}</h2>
    </div>
  )
}

export default Section1
