import React,{ useState} from 'react'
import '../../css/ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'


function ExpenseItem(props) {

  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <ExpenseDetails amount={props.amount} title={props.title} />
    </Card>
  )
}

export default ExpenseItem