import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, startEditExpenses, removeExpense, setExpenses, startSetExpenses, startRemoveExpenses } from '../../actions/expenses'
import database from '../../firebase/firebase'
import expenses from '../../tests/fixtures/expenses'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {description, note, amount, createdAt}
  })
  database.ref('expenses').set(expensesData).then(() => {
    done();
  })
})


test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        expense: {id: '123abc'}
    })
})


test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should edit expense from firebase', (done) => {
  const store = createMockStore({})
  const id = expenses[0].id
  const updates = {amount: 21045}
  store.dispatch(startEditExpenses(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`expenses/${id}`).once('value').then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount))
      done()
    })
  })

})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
    
    }
  });
});

test('should add expense to database and store', () => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
    
  })

})

test('should add expense with defaults to database and store', () => {
  const store = createMockStore({})
  const expenseData = {
    description :'', 
    note : '', 
    amount : 0, 
    createdAt : 0
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
    
  })

})
test('should set up expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type:' SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from database', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})
// test('should remove expense from database', (done) => {
  
//   const store = createMockStore({})
//   const data = []
//   store.dispatch(startSetExpenses()).then(() => {
//     data = store.getActions()
//     expect(actions[0]).toEqual({
//       type: 'SET_EXPENSES',
//       expenses
//     })
//     done()
//   store.dispatch(startRemoveExpenses())
// })