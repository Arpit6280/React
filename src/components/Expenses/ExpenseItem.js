import React,{ useState} from 'react'
import '../../css/ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'


function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title);
  const [price,setPrice]=useState(props.amount)
  const clickHandler=()=>{
   setTitle('Updated') 
  }
  const priceHandler=()=>{
    setPrice(100)
  }
  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <ExpenseDetails amount={price} title={title} />
    <button onClick={clickHandler}>Change Title</button>
    <button onClick={priceHandler}>Change Expense</button>
    </Card>
  )
}

export default ExpenseItem