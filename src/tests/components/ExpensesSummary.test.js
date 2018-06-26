import React from 'react'
import { shallow } from 'enzyme'
import ExpensesSummary from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import findTotalAmount from '../../selectors/expenses-total'


test('should render 1th ExpensesSumamry correctly', () => {
    const wrapper = shallow(<ExpensesSummary  expensesCount = {1} expensesTotalAmount = {256} />)
    expect(wrapper).toMatchSnapshot()
})

// should render ExpenseForm with expense data

test('should render more than 1th ExpenseSummary with expense data', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount = {3} expensesTotalAmount = {3512} />)
    expect(wrapper).toMatchSnapshot()
})