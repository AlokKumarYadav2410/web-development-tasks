import React from 'react'

const Card = ({filteredUsers, getBgColor}) => {
    return (
        <div className='flex flex-wrap gap-2'>{filteredUsers.map((user) => {
            return <div key={user.id} className='border-2 border-gray-200 px-2 py-4 rounded-lg grow' style={{ background: getBgColor() }}>
                <h1 className='text-lg font-semibold text-gray-700'>{user.name}</h1>
                <h2 className='text-md font-semibold text-gray-600'>{user.website}</h2>
                <p className='text-sm text-gray-500'>{user.email}</p>
            </div>
        })}</div>
    )
}

export default Card
