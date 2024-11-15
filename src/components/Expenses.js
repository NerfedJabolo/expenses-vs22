import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
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
        <div className="expenses">
            {/* <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={expenses[1]}></ExpenseItem> */}
            {expenses.map(expense => {
                return <ExpenseItem expenseData={expense}></ExpenseItem>
            })}
        </div>
    )
}

export default Expenses;