import { useState } from "react"

const Person=({addName,addNameChange,addNumber,newName,newNumber})=>{

    const handleAddName=(event)=>{
      event.preventDefault()
      addName()
    }

    const handleNameChange=(event)=>{
      addNameChange(event.target.value)
    }

    const handleNumberChange=(event)=>{
      addNumber(event.target.value)
    }

      return(
        <form onSubmit={handleAddName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
          </div>
          <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      )
}
export default Person