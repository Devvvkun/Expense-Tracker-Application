import React from 'react'
import Dashboard from '../Components/Dashboard'
import Transactions from '../Components/NavPages/Transactions'

const NavRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/transactions' element={<Transactions />}/>
        </Routes>
    </div>
  )
}

export default NavRoute