import React from 'react'
import '../../css/ExpenseFilter.css'



function ExpenseFilter(props) {
    const filterByYear=(e)=>{
        props.onChangeFilter(e.target.value)
    }
  return (
    <div className='filter'>
        <h2 className='h2'>Filter By Year</h2>
        <select value={props.selected} onChange={filterByYear}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    </div>
  )
}

export default ExpenseFilter