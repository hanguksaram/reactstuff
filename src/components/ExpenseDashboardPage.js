import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseListSorter from './ExpenseListSorter'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListSorter/>
        <ExpenseListFilters/>
        <ExpenseList/> 
    </div>
)

export default ExpenseDashboardPage