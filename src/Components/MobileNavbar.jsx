import { Menu, X } from 'lucide-react';

const MobileNavbar = ({ NavbarOpen, setNavbarOpen }) => {
    return (
        <button
            onClick={() => setNavbarOpen(prev => !prev)}
            className="fixed left-4 top-4 z-60 rounded-lg bg-white p-2 shadow-md md:hidden"
            aria-label={NavbarOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={NavbarOpen}
        >
            {NavbarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
};

export default MobileNavbar;

