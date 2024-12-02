import './App.css';
import { useState } from 'react';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
    { date: new Date(2023, 0, 10), title: 'New book', price: 30.99 },
    { date: new Date(2023, 0, 5), title: 'Icecream', price: 3.99 },
  ]);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
