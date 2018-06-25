import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()
console.log("hello there")
// store.subscribe(
//     () => {
//         const state = store.getState()
//         console.log(getVisibleExpenses(state.expenses, state.filters))}
// )


// let timeoutId =  setTimeout(function some()  {
//     let random = Math.random().toFixed(1)
//     store.dispatch(setTextFilter({text: random }))
//     if(random == 0.1) return
//     timeoutId = setTimeout(some, 3000)

// }, 3000)

const jsx = (
   <Provider store={store}>
        <AppRouter />
   </Provider> 
)


ReactDOM.render(jsx, document.getElementById("app"))

