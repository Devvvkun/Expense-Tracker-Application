import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import MobileNavbar from './Components/MobileNavbar'

const Body = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false)
    console.log(NavbarOpen);
    
  return (
    <div className='flex min-h-screen select-none'>
       <aside className={NavbarOpen ? "w-[21%] " : "absolute w-5"}>
        {/* <Navbar /> */}
        <MobileNavbar NavbarOpen={NavbarOpen} setNavbarOpen={setNavbarOpen}/>
        </aside>
        <main className={NavbarOpen ? "w-[84%] h-screen bg-gray-200" : "w-full bg-gray-200"}>
        <Outlet />
        </main>
    </div>
  )
}

export default Body