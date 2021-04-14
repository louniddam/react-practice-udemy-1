import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


const ExpensesList = (props) => {

    const expenses = props.items.map( (elem, key) => {
        return(
            <ExpenseItem
            key={key}
            title={elem.title}
            amount={elem.amount}
            date={elem.date} />
        )
    })
    
    return(
        <div>
            {/* {expenses.length < 1 ? `No expenses in ${filtredYear}` : expenses} */}
            {expenses.length === 0 && <p className='mess'>No expenses</p>}
            {expenses.length > 0 && expenses}
        </div>
    )
}

export default ExpensesList