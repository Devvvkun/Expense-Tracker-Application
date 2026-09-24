import { Link } from "react-router-dom"
import { LayoutPanelLeft,BadgeDollarSign,ClipboardMinus,FolderMinus,Settings,Goal,HandCoins } from 'lucide-react';
import UserDetail from "./UserDetail";
const Navbar = () => {
  return (
    <>
    <div className="Navbar bg-purple-400  h-screen absolute left-0 min-w-[20%]">
        <div className="logoBox flex pt-5">
            <div className="logo rounded-full py-2 px-4 ml-5 bg-gray-800 text-white">E</div>
            <h3 className="pt-2 ml-2 font-bold">Personal Expense Tracker</h3>
        </div>
        <div className="relative top-5 ml-15 flex flex-col">
        <Link to='/' className="link-style"><LayoutPanelLeft /> Dashboard</Link> <br />
        <Link to='/transactions' className="link-style"><BadgeDollarSign />Transactions</Link><br />
        <Link to='/budgets' className="link-style"><ClipboardMinus />Budgets</Link><br />
        <Link to='/reports' className="link-style"><FolderMinus />Reports</Link><br />
        <Link to='/upi' className="link-style"><HandCoins />UPI(beta)</Link><br />
        <Link to='/goals' className="link-style"><Goal />Goals</Link><br />
        <Link to='/settings' className="link-style"><Settings />Settings</Link><br />
        </div>
        <UserDetail />
    </div>
    </>
  )
}

export default Navbar