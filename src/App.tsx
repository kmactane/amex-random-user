import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?seed=kmactane-amex&results=10&inc=gender,name,location,email,dob,phone,picture")
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setUsers(data.results)
      })
  }, [])

  return (
    <>
      <h1>User Listing</h1>

      <table>
        <thead>
          <tr>
            <th className="imageCol" scope="col"></th>
            <th className="nameCol" scope="col">Name</th>
            <th className="ageCol" scope="col">Age</th>
            <th className="cityCol" scope="col">City</th>
          </tr>
        </thead>
        {users.length < 1 ? (<tr><td colSpan={4}>Nothing to display</td></tr>) : users.map((u, x) => (
          <>
            <tr key={x}>
              <th className="imageCol" scope="row"><img src={u.picture.thumbnail} alt="{u.name.first} {u.name.last}" width="48" height="48" /></th>
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
