import {Routes , Route} from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Transactions from '../Components/NavPages/Transactions'
import Budgets from '../Components/NavPages/Budgets'
import Goals from '../Components/NavPages/Goals'
import Reports from '../Components/NavPages/Reports'
import Settings from '../Components/NavPages/Settings'
import UPI from '../Components/NavPages/UPI'
import NotFound from '../Components/NavPages/NotFound'
import Body from '../Body'
const NavRoute = () => {
  return (
    <div >
        <Routes>
          <Route element={<Body />}>
            <Route index element={<Dashboard/>}/>
            <Route path='/transactions' element={<Transactions />}/>
            <Route path='/budgets' element={<Budgets />}/>
            <Route path='/goals' element={<Goals />}/>
            <Route path='/reports' element={<Reports />}/>
            <Route path='/settings' element={<Settings />}/>
            <Route path='/upi' element={<UPI />}/>
          </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default NavRoute