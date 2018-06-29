const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
                    return elem
                } 
            })
        case 'SET_EXPENSES':
            return action.expenses    
              
        default:
            return state
    }
}
