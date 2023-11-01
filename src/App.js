
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses=[
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
  return (
    <div className="App">
      <h2>Let get Started</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )
    )}
  
  
    </div>
  );
}

export default App;
