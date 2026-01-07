import React from 'react'

const Sender = ({ setMsg }) => {
    return (
        <div>
            <button onClick={() => setMsg("Hello from Sender")} className='p-2 bg-green-500 text-white rounded active:scale-95 cursor-pointer'>Send Message to Receiver</button>
        </div>
    )
}

export default Sender
