import { useState, useEffect } from 'react'
import Person from './components/persons'
import Filter from './components/filter'
import ShowPersons from './components/showPersons'
import PersonSer from './services/persons.js'
let error=false
const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] =useState('')
  const [showpersons,setShowPersons]=useState(persons)
  const [not,setNot]=useState(null)


  useEffect(()=>{
    PersonSer
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setShowPersons(response.data)
      }).catch(()=>{
        error=true
        setNot(`No connection of server`)
        
    })
  },[])

  const addName=()=>{
        

    if(persons.findIndex(person=>person.name===newName)>=0){
      const person=persons.find(person=>person.name===newName)
      if(window.confirm(`${newName} is already added to phonebook, replace hte old number with a new one`)){
        const newPerson={...person,number:newNumber}
        PersonSer.change(newPerson).then(response=>{
          PersonSer.getAll().then(response=>{
            setNot(`Changed ${person.name}'s number`)
            setShowPersons(response.data)
          })
        }).catch(error=>{
          error=true
          setNot(`Info of ${person.name} has already been removed from server`)
          
        })
      }
    }else{
      const newperson={
        name:newName,
        number:newNumber
      }
        PersonSer.create(newperson).then(response=>personSet(response.data))
        error=false
        setNot(`Added ${newName}`)
    }   

  }

  const removePerson=person=>{
    if(window.confirm(`Delete ${person.name}`)){
      console.log(person.id)
      PersonSer.remove(person.id).then(response=>{
        setNot(`Deleted ${person.name}`)
        PersonSer.getAll().then(response=>setShowPersons(response.data))
     }).catch(()=>{
      error=true
      setNot(`Info of ${person.name} has already been removed from server`)
    })
     
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

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    if(error){
      return (
        <div className="error">
          {message}
        </div>
      )
    }
    return (
      <div className="Info">
        {message}
      </div>
    )
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={not}/>
        <Filter AddNewFilter={AddNewFilter}/>
      <h2>Add A New</h2>
        <Person addName={addName} addNameChange={addNameChange} addNumber={addNumber} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <ShowPersons showpersons={showpersons} remove={removePerson}/>
    </div>
  )

}

export default App