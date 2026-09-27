import SearchBar from './SearchBar'
import ThemeIcon from './ThemeIcon'
import Notification from './Notification'
import UserPfp from '../../Assets/UserPfp'
const DashboardHeader = () => {
  return (
    <div className='flex justify-between'>
        <span className='ml-6 pt-0'><SearchBar /></span>
        <span className='flex items-center'>
        <ThemeIcon />
        <Notification />
        <UserPfp />
        </span>
    </div>
  )
}

export default DashboardHeader