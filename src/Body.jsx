import { useState } from 'react';
import Navbar from './Components/Navbar';
import MobileNavbar from './Components/MobileNavbar';
import { Outlet } from 'react-router-dom';

const Body = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className="flex min-h-screen w-full select-none">

            <aside className="hidden w-64 shrink-0 md:block">
                <Navbar />
            </aside>


            <MobileNavbar
                NavbarOpen={NavbarOpen}
                setNavbarOpen={setNavbarOpen}
            />


            {NavbarOpen && (
                <>

                    <div
                        className="fixed inset-0 z-40 bg-black/40 md:hidden"
                        onClick={() => setNavbarOpen(false)}
                    />

                    
                    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl md:hidden">
                        <Navbar />
                    </aside>
                </>
            )}

            
            <main className="min-w-0 flex-1 min-h-screen bg-gray-200">
                <Outlet />
            </main>

        </div>
    );
};

export default Body;
