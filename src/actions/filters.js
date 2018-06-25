//SET_TEXT_FILTER
export const setTextFilter = (text = {text: ""}) => ({
    type: 'EDIT_TEXT_FILTER',
    text
})
//why u want use different action fabrics for the same prop on filter ??
//SORT_BY_DATE
//SORT_BY_AMOUNT
export const sortBy = (object = {sortBy: ''}) => ({
    type: 'SORT_BY',
    object
})



export const setDate = ({startDate = undefined, endDate = undefined} = {}) => ({
    type: 'SET_DATE',
    startDate,
    endDate
})
//SET_START_DATE
//SET_END_DATE