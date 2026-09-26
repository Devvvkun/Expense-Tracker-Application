import {  NavLink } from "react-router-dom"
import { LayoutPanelLeft,BadgeDollarSign,ClipboardMinus,FolderMinus,Settings,Goal,HandCoins } from 'lucide-react';
import UserDetail from "./UserDetail";
const Navbar = () => {
   const navclass = ({isActive}) =>{
    return(
    `w-auto flex  font-bold ${isActive ? ' bg-sky-200 text-blue-500 shadow-amber-500 shadow-sm  w-5 pl-2 py-2 rounded-xl' :'text-black'}`
   )}
  return (
    <>
    <div className="Navbar white  h-screen absolute left-0 min-w-[20%]">
        <div className="logoBox flex pt-5">
            <div className="logo rounded-full py-2 px-4 ml-5 bg-gray-800 text-white">E</div>
            <h3 className="pt-2 ml-2 font-bold">Personal Expense Tracker</h3>
        </div>
        <div className="relative top-5 ml-15 w-45 pl-6 justify-center flex flex-col">
        <NavLink to='/'  className={navclass}><LayoutPanelLeft /> Dashboard</NavLink> <br />
        <NavLink to='/transactions' className={navclass}><BadgeDollarSign />Transactions</NavLink><br />
        <NavLink to='/budgets' className={navclass}><ClipboardMinus />Budgets</NavLink><br />
        <NavLink to='/reports' className={navclass}><FolderMinus />Reports</NavLink><br />
        <NavLink to='/upi' className={navclass}><HandCoins />UPI(beta)</NavLink><br />
        <NavLink to='/goals' className={navclass}><Goal />Goals</NavLink><br />
        <NavLink to='/settings' className={navclass}><Settings />Settings</NavLink><br />
        </div>
        <UserDetail />
    </div>
    </>
  )
}

export default Navbar