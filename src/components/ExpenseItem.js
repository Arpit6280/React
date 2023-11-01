import '../css/ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
    <ExpenseDate date={props.date} />
    <ExpenseDetails amount={props.amount} title={props.title} />
      {/* <div className="expense-item_description">
        <h2> {props.title} </h2>
        <div className="expense-item__price">{props.amount}</div>
      </div> */}
    </div>
  )
}

export default ExpenseItem