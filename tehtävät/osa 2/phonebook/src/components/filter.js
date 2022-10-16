import { useState } from "react"

const Filter=({AddNewFilter})=>{
    const [newFilter,setNewFilter] = useState('')
    
    const handleNewFilter=(event)=>{
        setNewFilter(event.target.value)
        AddNewFilter(event.target.value)
        
    }

    return(
        <div>
        <form>
          filter shown with<input
            value={newFilter}
            onChange={handleNewFilter}
          />
        </form>
      </div>
    )

}
export default Filter