
import selectExpensesTotal from '../../selectors/expenses-total'


const expenses = [
{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 0
},
{
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: 0
}
    
]

test('should correctly summ 3 expense',() => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(114195)
})
test('should return 0 if no expenses',() => {
    const result = selectExpensesTotal([])
    expect(result).toBe(0)
})
test('should correctly summ 1 expense',() => {
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(195)
})