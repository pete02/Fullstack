const ShowPersons=({showpersons,remove})=>{


    return(
        <div>
            {showpersons.map(person=><li key={person.name}>{person.name} {person.number} <button onClick={()=>remove(person)}>delete</button></li>)}
        </div>
    )
}
export default ShowPersons