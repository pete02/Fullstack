import axios from 'axios'
const baseUrl="http://localhost:3001/persons"

const getAll=()=>{
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

const remove= newObject=>{
    return axios.delete(`http://localhost:3001/persons/${newObject}`)
}

const change=newObject=>{
    return axios.put(`http://localhost:3001/persons/${newObject.id}`,newObject)
}

export default {getAll,create,remove,change}