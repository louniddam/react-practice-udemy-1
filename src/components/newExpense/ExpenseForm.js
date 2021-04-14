import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

        //Ou un seul state

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)

            //On pourait faire comme ça mais on peut recontrer des erreurs quand on travail avec le previous state

        // setUserInput({
        //     ...userInput,  
        //     title: e.target.value,
        // })

            //Du coup on utilise une fonction dans la fonction qui update le state
        
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         title: e.target.value
        //     }
        // })
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     amount: e.target.value
        // })

        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         amount: e.target.value
        //     }
        // })
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     date: e.target.value
        // })

        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         date: new Date(e.target.value)
        //     }
        // })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const formValues = {title: title, amount: amount, date: new Date(date)}
        props.onSaveExpenseData(formValues)
        setTitle('')
        setAmount('')
        setDate('')

    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="texte" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={date}  onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm