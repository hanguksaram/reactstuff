import React from 'react'
import selectExpenses from '../selectors/expenses'
import selectTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import numeral from 'numeral'

const ExpensesSummary = ({expensesCount, expensesTotalAmount}) => (

    <div>
        <h3>Total Expenses selected</h3>
        <div>{expensesCount}</div>
        <h3>Expenses Total Amount</h3>
        <div>{numeral(expensesTotalAmount).format('$0,0.00')}</div>
    </div>
)



const mapStatetoProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters) 
    
    return {
    expensesCount: visibleExpenses.length,
    expensesTotalAmount: selectTotal(visibleExpenses)
    }
}



export default connect(mapStatetoProps)(ExpensesSummary) 