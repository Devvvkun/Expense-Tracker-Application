import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex min-h-screen select-none'>
       <aside className='w-[21%]'>
        <Navbar />
        </aside>
        <main className='w-[79%] h-screen'>
        <Outlet />
        </main>
    </div>
  )
}

export default Body