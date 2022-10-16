const ShowPersons=({showpersons})=>{
    return(
        <div>
            {showpersons.map(person=><li key={person.name}>{person.name} {person.number}</li>)}
        </div>
    )
}
export default ShowPersons