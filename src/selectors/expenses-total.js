

export default  (expenses) => {
    return expenses.map((e) => e.amount).reduce((a, i) => a + i, 0)
   }