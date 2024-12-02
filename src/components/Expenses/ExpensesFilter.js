import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ year, onYearChange }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={year} // Set the select's default value
          onChange={(e) => {
            onYearChange(e.target.value); // Notify the parent of changes
          }}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
