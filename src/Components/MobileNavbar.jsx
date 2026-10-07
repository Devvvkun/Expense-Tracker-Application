import {Menu , X} from 'lucide-react'

const MobileNavbar = ({NavbarOpen , setNavbarOpen}) => {
  return (
   <button onClick={() => setNavbarOpen(prev => !prev)}>
  {NavbarOpen ? <X /> : <Menu />}
</button>
  )
}

export default MobileNavbar