import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './Expenses/ExpensesFilter';
import { useState } from 'react';

function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState(2024);

  return (
    <Card className="expenses">
      <ExpensesFilter
        year={filterYear}
        onYearChange={(year) => setFilterYear(parseInt(year))}
      />
      {expenses
        .filter((expense) => expense.date.getFullYear() === filterYear)
        .map((expense) => (
          <ExpenseItem key={expense.date.getTime()} expenseData={expense} />
        ))}
    </Card>
  );
}

export default Expenses;
