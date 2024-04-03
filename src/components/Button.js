import React from 'react'

export const Button = ({children}) => {
    return (
        <button className=' hover:bg-gradient-to-br w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-4 rounded-lg mr-2 mb-2 font-medium'>{children}</button>
    )
}
