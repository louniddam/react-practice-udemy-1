import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from '../expenses/ExpenseFilter'
import ExpensesList from './ExpensesList'
import './Expenses.css'
function Expenses (props) {

    const [filtredYear, setFiltredYear] = useState('2020')

    const getFiltredDate = (pickedDate) => {
        setFiltredYear(pickedDate);
    }

    const filtredExpenses = props.expenses.filter((elem) => {
        return elem.date.getFullYear().toString() === filtredYear
    })

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filtredYear} onDateChange={getFiltredDate}/>
                <ExpensesList items={filtredExpenses}/>
            </Card>
        </div>

    )
}

export default Expenses