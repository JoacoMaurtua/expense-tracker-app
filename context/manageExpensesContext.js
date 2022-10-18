import { createContext, useState } from "react";

export const ManageExpensesContext = createContext({
  ids:[],
  addExpense: ()=>{},
  removeExpense: (id)=>{},
  editExpense: (id)=>{},
});


function ExpensesContextProvider({children}){
  return(
    <ManageExpensesContext.Provider>
      {children}
    </ManageExpensesContext.Provider>
  )


};


export default ExpensesContextProvider;