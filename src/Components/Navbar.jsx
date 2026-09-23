import { Link } from "react-router-dom"
import { LayoutPanelLeft,BadgeDollarSign,ClipboardMinus,FolderMinus,Settings,Goal,HandCoins } from 'lucide-react';
import UserDetail from "./UserDetail";
const Navbar = () => {
  return (
    <>
    <div className="Navbar bg-purple-400 w-1/3 h-screen absolute left-0">
        <div className="logoBox flex pt-5">
            <div className="logo rounded-full py-2 px-4 ml-3 bg-gray-800 text-white">E</div>
            <h3 className="pt-2">Personal Expense Tracker</h3>
        </div>
        <div className="relative top-5 ml-15 flex flex-col">
        <Link to='/' className="link-style"><LayoutPanelLeft /> Dashboard</Link> <br />
        <Link to='/transactions' className="link-style"><BadgeDollarSign />Transactions</Link><br />
        <Link className="link-style"><ClipboardMinus />Budgets</Link><br />
        <Link className="link-style"><FolderMinus />Reports</Link><br />
        <Link className="link-style"><HandCoins />UPI(beta)</Link><br />
        <Link className="link-style"><Goal />Goals</Link><br />
        <Link className="link-style"><Settings />Settings</Link><br />
        </div>
        <UserDetail />
    </div>
    </>
  )
}

export default Navbar