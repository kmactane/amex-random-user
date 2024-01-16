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
      <h1>User Listing</h1>

      <table>
        <thead>
          <tr>
            <th className="imageCol"></th>
            <th className="nameCol">Name</th>
            <th className="ageCol">Age</th>
            <th className="cityCol">City</th>
          </tr>
        </thead>
        {users.length < 1 ? (<tr><td colSpan={4}>Nothing to display</td></tr>) : users.map((u, x) => (
          <>
            <tr key={x}>
              <td className="imageCol"><img src={u.picture.thumbnail} alt="" /></td>
              <td className="nameCol"><a href={`/detail/${x+1}`}>{u.name.first} {u.name.last}</a></td>
              <td className="ageCol">{u.dob.age}</td>
              <td className="cityCol">{u.location.city}</td>
            </tr>
          </>
        ))}
      </table>
    </>
  )
}

export default App
