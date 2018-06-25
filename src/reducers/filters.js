const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

}

export default (state = filterReducerDefaultState, action) => {
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