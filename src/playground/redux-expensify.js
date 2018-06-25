import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

//ADD_EXPENSE

const addExpense = (
    {description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
//REMOVE_EXPENCE

const removeExpense = ({id = 1} = {}) => ({type: 'REMOVE_EXPENSE',
expense: {
    id: id
}})
//EDITE_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
//SET_TEXT_FILTER
const setTextFilter = (text = {text: ""}) => ({
    type: 'EDIT_TEXT_FILTER',
    text
})
//why u want use different action fabrics for the same prop on filter ??
//SORT_BY_DATE
//SORT_BY_AMOUNT
const sortBy = (object = {sortBy: ''}) => ({
    type: 'SORT_BY',
    object
})



const setDate = ({startDate = undefined, endDate = undefined} = {}) => ({
    type: 'SET_DATE',
    startDate,
    endDate
})
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(elem => elem.id !== action.expense.id)
        case 'EDIT_EXPENSE':
            return state.map((elem) => {
                if (elem.id == action.id) {
                    return {
                        ...elem,
                        ...action.updates
                    }
                }
                else {
                    return expense
                } 
            })
                   
              
        default:
            return state
    }
}
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case "EDIT_TEXT_FILTER":
            return {...state,
                    ...action.text}
        case "SORT_BY":
            return {
                    ...state,
                    ...action.object}
        case "SET_DATE": 
            return {
                    ...state,
                    startDate: action.startDate,
                    endDate: action.endDate 

            }
        
            
        default: 
            return state
    }

}


// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
      
    })
)
// timestamps (milliseconds)
// January 1st 1970 (unix epoch)
//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate} = {}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    } ).sort((a, b) => {
            if(sortBy === 'date'){
                return a.createdAt < b.createdAt ? -1 : 1
             }
             else if (sortBy === 'amount'){
                 return a.amount < b.amount ? 1 : -1
             }

        }
    )
}
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}))
// store.dispatch(setDate({startDate: 125, endDate: 1250}))




// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))
// store.dispatch(setTextFilter({text: 'rent'}))
store.dispatch(sortBy({sortBy: 'amount'}))
 //store.dispatch(sortBy({sortBy: 'date'}))




const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
