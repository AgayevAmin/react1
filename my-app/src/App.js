import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
const BASE_URL = "https://jsonplaceholder.typicode.com/users"

export function App() {
const [name,setName] = useState("")
const [userName,setUsername] = useState("")
const getData =async() => {
  try{
    const response= await axios (BASE_URL);
    console.log (response.data)
    setName(response.data[0].name)
    setUsername(response.data[0].username)
  }
  catch(err){
    console.log(err)
  }
}
useEffect(() =>{getData()},[])
return(
  <>
  <h1> Name:{name}</h1>
  <h1> Username:{userName}</h1>
  </>
)
}
export default App;
