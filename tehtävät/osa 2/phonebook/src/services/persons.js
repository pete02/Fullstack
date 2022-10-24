import axios from 'axios'
const baseUrl="/api/persons"

const getAll=()=>{
    console.log(baseUrl)
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

const remove= newObject=>{
    return axios.delete(`${baseUrl}/${newObject}`)
}

const change=newObject=>{
    return axios.put(`${baseUrl}/${newObject.id}`,newObject)
}

export default {getAll,create,remove,change}