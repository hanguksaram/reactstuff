import React from 'react'
import { connect } from 'react-redux'
import { sortBy } from '../actions/filters'

const ExpenseListSorter = (props) => (
    <div>
        <select onChange={(e) => {
            props.dispatch(sortBy({sortBy: e.target.value}))
        }}><option value = "date" >date</option>
        <option value = "amount">amount</option></select>
    </div>
)

export default connect()(ExpenseListSorter)





