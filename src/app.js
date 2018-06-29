import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter, {history} from './routes/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import {startSetExpenses} from './actions/expenses'
import {login, logout} from './actions/auth'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'



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
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, document.getElementById("app"))
        hasRendered = true
    }
}
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"))



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    }
    else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

