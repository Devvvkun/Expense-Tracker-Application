import SearchBar from './SearchBar'
import ThemeIcon from './ThemeIcon'
import Notification from './Notification'
import UserPfp from '../Assets/UserPfp'
const DashboardHeader = () => {
  return (
    <div>
        <SearchBar />
        <ThemeIcon />
        <Notification />
        <UserPfp />
    </div>
  )
}

export default DashboardHeader