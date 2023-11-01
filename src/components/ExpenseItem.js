import '../css/ExpenseItem.css'

function ExpenseItem(props) {
  console.log(props,'f');
  return (
    <div className="expense-item">
      {/* <h2>hh</h2> */}
        <div> {props.date.toDateString()} </div>
        <div className="expense-item_description">
          <h2> {props.title} </h2>
        <div className="expense-item__price">{props.amount}</div>
        </div>
    </div>
  )
}

export default ExpenseItem