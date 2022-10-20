import { createContext, useReducer } from 'react';
import { tempExpenses } from '../Util/DUMMY';

export const ManageExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  removeExpense: (id) => {},
  editExpense: (id, { title, amount, date }) => {},
});

//reducer(logica de cada funcion)
function expensesReducer(state, action) { //state es un arreglo de expenses(objetos)
  switch (action.type) {
    case 'ADD':
      const id = new Date().toDateString + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state]; //retorno (objeto con expenseData + id provicional) + expenses ya existentes
    
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex( //determinar la posicion del objeto a actualizar
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex] //el objeto a actualziar
      const updatedItem = {...updatableExpense, ...action.payload.data} //objeto con los nuevos datos sobreescritos
      const updatedExpenses = [...state] //arreglo inicial
      updatedExpenses[updatableExpenseIndex] = updatedItem //reemplazo el nuevo objeto por el anterior en el arreglo
      return updatedExpenses;

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)

    default:
      return state;
  }
}


function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, tempExpenses);

  //actions:
  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id:id, data:expenseData } });
  }

  return (
    <ManageExpensesContext.Provider value={expensesState}>
      {children}
    </ManageExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;

//Esquema: useReducer(<reductor>, <estado inicial>)

//Nota: De alguna manera useReducer tiene la misma mecanica que useState
//      pero con varias piezas de estado a la vez
