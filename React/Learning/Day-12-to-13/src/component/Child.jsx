import React from 'react'

const Child = ({ value, changeValue }) => {

    const handleIncrement = () => {
        const newValue = value + 1;
        changeValue(newValue);
    }

    const handleDecrement = () => {
        const newValue = value - 1;
        changeValue(newValue);
    }
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            I will change parent content
            <div>
                <button onClick={handleIncrement} className='ml-4 p-2 bg-blue-500 text-white rounded active:scale-95 cursor-pointer'>Increment Parent Value</button>
            <button onClick={handleDecrement} className='ml-4 p-2 bg-red-500 text-white rounded active:scale-95 cursor-pointer'>Decrement Parent Value</button>
            </div>
        </div>
    )
}

export default Child
