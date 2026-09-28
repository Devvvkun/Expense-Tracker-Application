import { NavLink } from "react-router-dom"
const Add = () => {
    function FilterDivClicked({isActive}){
        return `${isActive ? 'bg-green-400': 'bg-gray-300'} w-19 h-10 flex justify-center items-center rounded-sm px-4 py-2 `
    }
  return (
    <div className=''> <NavLink className=
    {FilterDivClicked}>All</NavLink> </div>
  )
}

export default Add