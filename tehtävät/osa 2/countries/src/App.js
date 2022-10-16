import { useState,useEffect } from "react"
import axios from "axios"


const Country=({country})=>{
  return(
    <div>
      <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      </div>
      <div>
        <b>languages</b>
        {Object.values(country.languages).map(lang=> <li key={lang}>{lang}</li>)}
      </div>
      <div>
        <img src={country.flags.png}/>
      </div>
    </div>
    )
}

const Countries=({countries})=>{
  const [set,setSet]=useState()
  let c=[]
  if(countries.length===0){
    return(<p>none found</p>)
  }
  if(countries.length==1){
    const country=countries[0]
    return(<Country country={country}/>)
    }
  if(countries.length>10){
    let c=null
    return(
    <p>Too many matches, specify another filter</p>
    )
  }

  const handleClick=(country)=>{
    setSet(country.name.common)
  }
  return(
    <div>
      {countries.map(country =>
      <div key={country.name.common}>
         {country.name.common} 
         <button key={"show"+country.name.common}onClick={()=>handleClick(country)}>show</button>
          {set===country.name.common && <Country country={country}/>}
         </div>
         )}
    </div>
  )
}

const App=()=> {
  const [countries,setCountries] =useState([])
  const [showCountries,setshowCountries]=useState([])
  const [find,setFind]=useState('')

  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        setshowCountries(response.data)
      })
  },[])

  const handleFind=(event)=>{
    setFind(event.target.value)
    setshowCountries(countries.filter(country=>country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div>
      <div>
        <form>
            find countries <input
            value={find}
            onChange={handleFind}
            />
        </form>
      </div>
      <div>
        <Countries countries={showCountries}/>
      </div>
    </div>
  );
}

export default App;
