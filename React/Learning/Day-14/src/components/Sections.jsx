import React, { useContext } from 'react'
import { UserContextData } from '../context/UserContext'

const Sections = () => {
    const users = useContext(UserContextData);
    console.log("User from Context in Sections:", users);
  return (
    <div className='flex-1 bg-gray-800 w-full p-4 text-white'>
      Section
      {users && (
        <div className='mt-4 p-4 bg-gray-700 rounded'>
          <h3 className='text-lg font-bold'>User Info from Context:</h3>
        {users.map((user, index) => (
            <div key={index} className="mt-2 p-2 border-b border-gray-600">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
        ))}
        </div>
      )}
    </div>
  )
}

export default Sections
