import React from 'react'
import toggleImage from "./../assets/toggle.png";
import court from "./../assets/court.png";

const FirstCard = () => {
    return (
        <div className='first-card card'>
            <div><img src={court} alt="court" /></div>
            <div>
                <h2>Professional hard courts <span>with tournament-grade lighting & climate control - play in </span>perfect conditions, in any season.</h2>
            </div>
            <div>
                <img width={`40px`} src={toggleImage} alt="toggle" />
                <p>Game Mode</p>
            </div>
        </div>
    )
}

export default FirstCard
