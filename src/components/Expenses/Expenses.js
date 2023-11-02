import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import '../../css/Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'

function Expenses(props) {
  const [filteredYear, setFilteredYear]=useState('2020')
const expenses=props.expenses
 const filterChangeHandler =(selectedYear)=>{
  setFilteredYear(selectedYear);
 }

 const filteredExpenses= expenses.filter((expense)=>{
  return expense.date.getFullYear().toString() ===filteredYear
 })


  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses