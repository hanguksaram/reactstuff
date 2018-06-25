import uuid from 'uuid'
//ADD_EXPENSE

export const addExpense = (
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