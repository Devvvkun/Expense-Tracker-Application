import { Bell } from "lucide-react"

const Notification = () => {
  return (
    <div className=" h-5 w-5" >
        <Bell />
        <div className="bg-red-600 rounded-full h-2 w-2 relative -top-6 left-4"></div>
        
    </div>
  )
}

export default Notification