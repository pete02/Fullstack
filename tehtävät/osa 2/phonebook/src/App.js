import { useState, useEffect } from 'react'
import Person from './components/persons'
import Filter from './components/filter'
import ShowPersons from './components/showPersons'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] =useState('')
  const [showpersons,setShowPersons]=useState(persons)


  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setShowPersons(response.data)
      })
  },[])

  const addName=()=>{
        const newperson={
          name:newName,
          number:newNumber
        }

    if(persons.findIndex(person=>person.name===newName)>=0){
      alert(`${newName} is already added to phonebook`)
    }else{
        personSet(newperson)
    }   

  }

  const addNumber=(number)=>{
      setNewNumber(number)
    }
    const addNameChange=(name)=>{
      setNewName(name)
    }
  
  const personSet=(newPerson)=>{
    setPersons(persons.concat(newPerson))
    setShowPersons(persons.concat(newPerson))
  }

  const AddNewFilter=(name)=>{
    setShowPersons(persons.filter(person=>person.name.toLowerCase().includes(name.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter AddNewFilter={AddNewFilter}/>
      <h2>Add A New</h2>
        <Person addName={addName} addNameChange={addNameChange} addNumber={addNumber} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <ShowPersons showpersons={showpersons}/>
    </div>
  )

}

export default App