import { useState } from 'react'

const StatisticsLine=(props)=>(
  <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
)

const Statistics=(props)=>{
  
  if(props.good===0 &&props.bad===0&&props.neutral===0){
    return(
      <div>
        <h1>statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  }
  return(
    <table>
      <tbody>
        <StatisticsLine text="good" value={props.good}/>
        <StatisticsLine text="neutral" value={props.neutral}/>
        <StatisticsLine text="bad" value={props.bad}/>
        <StatisticsLine text="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)}/>
        <tr>
          <td>positive</td> 
          <td>{props.good/(props.good+props.neutral+props.bad)*100}%</td>
          </tr>
      </tbody>
    </table>
  )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleGoodClick=()=>{
      setGood(good+1)
  }
  const HandleBadClick=()=>{
    setBad(bad+1)
}
const HandleNeutralClick=()=>{
  setNeutral(neutral+1)
}
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={HandleGoodClick} text='good'/>
      <Button handleClick={HandleNeutralClick} text='neutral'/>
      <Button handleClick={HandleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App