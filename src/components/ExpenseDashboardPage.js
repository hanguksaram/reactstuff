import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseListSorter from './ExpenseListSorter'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListSorter/>
        <ExpenseListFilters/>
        <ExpenseList/> 
        <ExpensesSummary/>
    </div>
)

export default ExpenseDashboardPage