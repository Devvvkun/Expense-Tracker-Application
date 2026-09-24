import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex min-h-screen select-none'>
       <aside className='w-[21%]'>
        <Navbar />
        </aside>
        <main className='w-[84%] h-screen bg-purple-200'>
        <Outlet />
        </main>
    </div>
  )
}

export default Body