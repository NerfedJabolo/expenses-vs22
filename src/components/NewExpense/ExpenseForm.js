import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      title,
      price: parseFloat(price),
      date: new Date(date),
    };

    props.onAddExpense(newExpense);
    setFormOpen(false);
    setTitle('');
    setPrice('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      {formOpen && (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2024-11-12"
              max="2026-01-31"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className={`new-expense__actions ${formOpen ? '' : 'centered'}`}>
        {formOpen ? (
          <>
            <button type="submit">Add Expense</button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setFormOpen(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setFormOpen(true);
            }}
          >
            Add New Expense
          </button>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
