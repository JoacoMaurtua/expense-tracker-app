import axios from 'axios';

export const storeExpenseData = (expenseData) => {
  //solicitus POST al REST API de firebase:
  axios.post(
    'https://rn-expense-tracker-7cac9-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
};
