
import './App.css';
import ExpenseForm from './components/NewExpense/ExpenseForm';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  return (
    <div className="App">
      {/* <ExpenseForm/> */}
      <NewExpense />
    <Expenses/>
  
  
    </div>
  );
}

export default App;
