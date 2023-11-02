import React from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
    const displayData=(e)=>{
        console.log(e.target.value);
    }
  return (
        <form action="" onChange={displayData}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label> Title </label>
              <input type="text" name="" id="" />
            </div>
            <div className="new-expense__control">
              <label> Amount </label>
              <input type="number" name="" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
              <label> Date </label>
              <input type="date" min="2019-01-01" max="2023-11-25" />
            </div>
          </div>
           <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
           </div>
        </form>

  )
}

export default ExpenseForm