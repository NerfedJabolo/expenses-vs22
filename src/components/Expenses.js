import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './Expenses/ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(2024);

  const yearChangeHandler = (selectedYear) => {
    setFilterYear(parseInt(selectedYear)); // Update the state
  };

  const expenses = [
    {
      date: new Date(2023, 0, 10),
      title: 'New book',
      price: 30.99,
    },
    {
      date: new Date(2023, 0, 5),
      title: 'Icecream',
      price: 3.99,
    },
    {
      date: new Date(2024, 0, 20),
      title: 'New game',
      price: 69.99,
    },
    {
      date: new Date(2025, 0, 15),
      title: 'Lunch',
      price: 12.99,
    },
  ];

  return (
    <Card className="expenses">
      {/* Pass filterYear and handler to ExpensesFilter */}
      <ExpensesFilter year={filterYear} onYearChange={yearChangeHandler} />
      {expenses
        .filter((expense) => expense.date.getFullYear() === filterYear)
        .map((expense) => (
          <ExpenseItem key={expense.date.getTime()} expenseData={expense} />
        ))}
    </Card>
  );
}

export default Expenses;
