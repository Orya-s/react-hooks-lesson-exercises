import React from 'react'
import { useState } from 'react'

export default function Exercise1() {
  const [userInfo, setUserInfo] = useState({name: "", city: "", country: ""})

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  
  const handleChange = (key, value) => setUserInfo({...userInfo, [key]: value})

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">

        <input type='text' placeholder='Your Name' value={userInfo.name} onChange={e => handleChange('name', e.target.value)}></input>
        <input type='text' placeholder='Your City' value={userInfo.city} onChange={e => handleChange('city', e.target.value)}></input>
        <select value={userInfo.country} onChange={e => handleChange('country', e.target.value)}>
          {countries.map((c, k) => <option key={k} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  )
}