const Header=(props)=>{
    return(
      <div>
        <h1>
          {props.course}
        </h1>
      </div>
    )
  }
  const Part=(props)=>{
    return(
      <div>
        <p>{props.part.name} {props.part.exercises}</p>
      </div>
    )
  }
  const Content=(props)=>{
    console.log(props)
    return(
      <div>
        {props.parts.map(part => <Part key={part.id} part={part}/>)}
      </div>
    )
  }
  const Total=(props)=>{
    console.log(props.parts[0])
    let total=0
    props.parts.map(part=>total +=part.exercises)
    return(
      <div>
        <b>total of {total} excercises</b>
      </div>
    )
  }
  
  const Course=(course)=>{
    console.log(course.course)
    return(
      <div>
        <Header course={course.course.name}/>
        <Content parts={course.course.parts}/>
        <Total parts= {course.course.parts}/>
      </div>
    )
  }
export default Course