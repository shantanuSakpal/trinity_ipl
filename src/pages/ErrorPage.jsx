import React from 'react'
import { Link } from 'react-router-dom'
export const ErrorPage = () => {
    return (
        <div className='p-5 min-h-screen'>
            <h1 className='text-red-600 font-bold text-center text-4xl'>Oops! You seem to be lost.</h1>
            <p className='text-lg my-2'>Don't worry, Here are some helpful links:</p>
            <ul className='font-bold mx-3 underline text-blue-600'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}
