import { Sun,Moon } from "lucide-react"
import { useState } from "react"

const ThemeIcon = () => {
    const [Theme, setTheme] = useState(true)
  return (
    <div>
        <button onClick={()=> setTheme(!Theme)}>{Theme ? <Sun /> : <Moon/>}</button>
    </div>
  )
}

export default ThemeIcon