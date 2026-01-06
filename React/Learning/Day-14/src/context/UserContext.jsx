import React, { createContext, use } from 'react'

export const UserContextData = createContext();

const UserContext = ({ children }) => {

    const user = [
        {
            "name": "Subastral",
            "email": "subastral@example.com"
        },
        {
            "name": "Alex Johnson",
            "email": "alex.johnson@example.com"
        },
        {
            "name": "Priya Sharma",
            "email": "priya.sharma@example.com"
        },
        {
            "name": "Rahul Verma",
            "email": "rahul.verma@example.com"
        },
        {
            "name": "Arjun Patel",
            "email": "arjun.patel@example.com"
        }
    ]

    const userPost = {
        title: "Hello World",
        content: "This is my first post."
    }

    return (
        <UserContextData.Provider value={user}>
            {children}
        </UserContextData.Provider>
    )
}

export default UserContext
