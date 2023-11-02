
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';



const DUMMY_EXPENSES=[
  {
    id:'e1',
    title:'Toilet Paper',
    amount:94.12,
    date : new Date(2020,7,14)
  },
  {
    id:'e2',
    title:'New Tv',
    amount:894.12,
    date : new Date(2023,5,14)
  },
  {
    id:'e3',
    title:'Car Insurance',
    amount:294.12,
    date : new Date(2022,7,12)
  },
  {
    id:'e4',
    title:'News Paper',
    amount:4.2,
    date : new Date(2022,5,28)
  }
] 

function App() {

  const[ expenses,setExpenses]=useState(DUMMY_EXPENSES)
  const addExpenseHandler= expense=>{

    setExpenses((prevState)=>{
      return [expense, ...prevState]
    })
    // expenses.push(expense);
    // console.log(expenses);
    // const a=expenses;
    // setdynamicExpenses(a);
    // console.log(dynamicExpenses);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses expenses={expenses}/>
  
  
    </div>
  );
}

export default App;
