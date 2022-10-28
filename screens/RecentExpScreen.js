import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ExpenseOutput from '../components/ExpenseOutput';
import { ManageExpensesContext } from '../context/manageExpensesContext';
import { getDateMinusDays } from '../Util/date';
import { fetchExpenseData } from '../Util/http';

export default function RecentExpScreen() {
  //const expensesCotext = useContext(ManageExpensesContext);

  const [fetchExpenses, setFetchExpenses] = useState([]);

  //extrayendo data del backend
  useEffect(() => {
    const getExpenseData = async () => {
      const expenses = await fetchExpenseData();
      setFetchExpenses(expenses);
    };
    getExpenseData();
  }, []);

  const recentExpenses = fetchExpenses.filter((expense) => {
    const today = new Date(); //fecha actual
    const date7DaysAgo = getDateMinusDays(today, 7); //fecha de hace 7 dias

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <>
      <ExpenseOutput
        expenses={recentExpenses}
        periodName="Last 7 days"
        fallbackText="No expenses in the last 7 days"
      />
    </>
  );
}
