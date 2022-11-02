import { createContext, useReducer } from 'react';
//import { tempExpenses } from '../Util/DUMMY';

export const ManageExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
  setExpenses: (expenses)=>{},
});

//reducer(logica de cada funcion)
function expensesReducer(state, action) { //state es un arreglo de expenses(objetos)
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state]; //retorno (objeto con expenseData + id provicional) + expenses ya existentes
    
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
      return state.filter((expense) => expense.id !== action.payload);

    case 'SET':
      const inverted = action.payload.reverse();
      return inverted //devuelve el array de expenses

    default:
      return state;
  }
}


function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer,[]); //ahora arranco con un arreglo vacio


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

  function setExpenses(expenses){
    dispatch({ type: 'SET', payload: expenses})
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses,
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


//Nota: Para poder eliminar y editar un elemento, cuanso se trabaja con un backend tipo CMS
//      es necesario trabajar con el id que genera automaticamente el CMS