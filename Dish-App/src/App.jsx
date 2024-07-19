import { useEffect, useState } from 'react'
import './App.css'
import DishesList from './Components/DishesList'
import AppName from './Components/AppName'

function App() {

  const [dishList, setDishList] = useState([])

  useEffect(() => {
    fetch("http://localhost:8081/")
      .then(res => res.json())
      .then(data => setDishList(data))
      .catch(err => console.log(err));

  }, [dishList])
  
  return (
    <>
      <AppName></AppName>
      <DishesList dishList={dishList}></DishesList>
    </>
  )
}

export default App
