import uuid from 'uuid'
import database from '../firebase/firebase'
//ADD_EXPENSE

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})
//REMOVE_EXPENCE

export const removeExpense = ({id = 1} = {}) => ({type: 'REMOVE_EXPENSE',
expense: {
    id: id
}})
//EDITE_EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpenses = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(
            updates
        ).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt}
        
        
        
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense(
                {id: ref.key,
                ...expense}
            ))
        })

    }
}

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

 
export const startSetExpenses = () => {
   
    return (dispatch) => { 
        return database.ref('expenses')
        .once('value')
        .then((snapshot) => {
             const expenses = []
             snapshot.forEach((expense) => {expenses.push({...expense.val(), id: expense.key})})
             dispatch(setExpenses(expenses))
        })
    }
}
export const startRemoveExpenses = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove()
            .then(() => {
                dispatch(removeExpense({id}))
            })
    }
}
       
    



