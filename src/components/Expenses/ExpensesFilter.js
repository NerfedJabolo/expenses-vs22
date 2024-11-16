import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({year}) => {
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={2024} onChange={(e) => {
                    year(e.target.value)
                    }}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;