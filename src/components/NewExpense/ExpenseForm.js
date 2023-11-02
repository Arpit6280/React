import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredAmount,setEnteredAmount]=useState('');
  const [enteredDate,setEnteredDate]=useState('')

  // const [userInput,setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // })
   
  
  // const titleChangeHandler=(e)=>{
  //       setUserInput((prevState)=>{
  //         return {...prevState,enteredTitle:e.target.value}
  //       })
  //   }
  const titleChangeHandler=(e)=>{
    setEnteredTitle(e.target.value)
}
    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
         setEnteredDate(e.target.value);
    }
    const submitHandler=(e)=>{
      e.preventDefault();
      let obj={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
      }
      props.onSaveExpenseData(obj);
      console.log(obj);
      // setEnteredAmount('')
      // setEnteredDate('');
      // setEnteredTitle('')
    }
  return (
        <form action=""onSubmit={submitHandler} >
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label> Title </label>
              <input type="text" name="" id="" value={enteredTitle}  onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label> Amount </label>
              <input type="number" name="" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label> Date </label>
              <input type="date" min="2019-01-01" max="2023-11-25" value={enteredDate} onChange={dateChangeHandler} />
            </div>
          </div>
           <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
           </div>
        </form>

  )
}

export default ExpenseForm