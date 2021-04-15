import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


const ExpensesList = (props) => {

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No expenses</h2>
    }
    return(
        <ul className='expenses-list'>
            {props.items.map( (elem, key) => {
                    return(
                        <ExpenseItem
                        key={key}
                        title={elem.title}
                        amount={elem.amount}
                        date={elem.date} />
                    )
            })}
        </ul>
    )
}

export default ExpensesList