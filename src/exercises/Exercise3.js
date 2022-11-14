import React from 'react'
import { useState, useEffect } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  const [selectedMonth, setSelectedMonth] = useState("")
  const [expenses, setExpenses] = useState([])


  useEffect(() => {
    async function fetchData() {
      const expensesData = await fetchExpenses(selectedMonth)
      setExpenses(expensesData)
    }
    fetchData();
  }, [selectedMonth]);

  const handleChange = value => setSelectedMonth(value)

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <div>
          <select value={selectedMonth} onChange={e => handleChange(e.target.value)}>
            {months.map((m, idx) => <option value={idx} key={idx}>{m}</option>)}
          </select>
        </div>
        {expenses.map((e, k) => <div key={k}>{e.item}  {e.date}  {e.amount}</div>)}
      </div>
    </div>
  )
}