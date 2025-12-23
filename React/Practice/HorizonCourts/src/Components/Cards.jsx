import React from 'react'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'

const Cards = () => {
  return (
    <div className='card-container'>
        <div className="cards">
            <FirstCard />
            <SecondCard />
            <ThirdCard />
        </div>
      <p>A few more facts about us in numbers</p>
    </div>
  )
}

export default Cards
