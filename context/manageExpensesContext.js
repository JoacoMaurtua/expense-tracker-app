import { createContext, useReducer } from 'react';

export const ManageExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  removeExpense: (id) => {},
  editExpense: (id, { title, amount, date }) => {},
});

//reducer
function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
    case 'UPDATE':
    case 'DELETE':
    default:
      return state;
  }
}

const value = {};

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer);

  //actions:

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  };

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  };

  function updateExpense(id, expenseData) {
    dispatch({type: 'UPDATE', payload: {id,expenseData}})
  }

  return (
    <ManageExpensesContext.Provider value={value}>
      {children}
    </ManageExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;

//Esquema: useReducer(<reductor>, <estado inicial>)

//Nota: De alguna manera useReducer tiene la misma mecanica que useState
//      pero con varias piezas de estado a la vez
