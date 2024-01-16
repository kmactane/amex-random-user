import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?seed=kmactane-amex&results=10&inc=gender,name,location,email,dob,picture")
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log("data.results:",data.results);
        setUsers(data.results)
      })
  }, [])

  useEffect(() => {
    console.log("users set to: [" + ((users instanceof Array) ? "array" : typeof users) + "]",users);
  }, [users])

  return (
    <>
      <h1>Vite + React</h1>
      <ol>
        {users.length < 1 ? (<li>Nothing to display</li>) : users.map((u, x) => (
          <li key={x}>{u.name.first} {u.name.last}</li>
        ))}
      </ol>
    </>
  )
}

export default App
