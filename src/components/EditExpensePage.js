import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
   
    return(
        <div><ExpenseForm expense = {props.expense}
        onSubmit = {(id, expense) => {
            console.log(id, expense)
            props.dispatch(editExpense(expense, id)
        )
        props.history.push('/')
        }}/>
        <button onClick={() => {
            props.dispatch(removeExpense({id : props.expense.id}))
            console.log(props.id)
            props.history.push('/')}}>Remove Expense</button></div>
    )
}



const mapStateToProps = (state, props) => (
    {expense: state.expenses.find(expense => expense.id === props.match.params.id)})
export default connect(mapStateToProps)(EditExpensePage)