import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from './Card'
import ExpensesFilter from "./Expenses/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState(2024)

    console.log('Year data in Expenses.js ',filterYear)
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title:'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 5),
            title:'Icecream',
            price: 3.99
        }
    ]

    return (
        <Card className="expenses">
            <ExpensesFilter year={setFilterYear} />
            {/* <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={expenses[1]}></ExpenseItem> */}
            {expenses.map(expense => {
                return <ExpenseItem expenseData={expense}></ExpenseItem>
            })}
        </Card>
    )
}

export default Expenses;