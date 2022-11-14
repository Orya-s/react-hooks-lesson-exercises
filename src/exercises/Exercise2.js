import React, { useState, useEffect } from 'react'
import axios from 'axios';  

export default function Exercise2() {  
  const [users, setUsers] = useState([])
  
  // option 1
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5').then((res) => {
      setUsers(res.data.results)
    })
  }, [])

  // option 2
  /*
  useEffect(() => {
    async function fetchUsersData() {
      const usersData = await axios.get('https://randomuser.me/api/?results=5')
      setUsers(usersData.data.results)
    }
    fetchUsersData();
  }, []); 
  */


  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map((u, idx) => 
          <div key={idx}>
            <img src={u.picture.thumbnail} alt='userImg'></img>  
            {u.name.first} {u.name.last}
          </div>
        )}
      </div>
    </div>
  )
}