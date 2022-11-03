import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ExpenseOutput from '../components/ExpenseOutput';
import { ManageExpensesContext } from '../context/manageExpensesContext';
import { getDateMinusDays } from '../Util/date';
import { fetchExpenseData } from '../Util/http';
import Loader from '../components/Loader';

export default function RecentExpScreen() {
  const [isfetching, setIsFetching] = useState(true);

  const expensesCotext = useContext(ManageExpensesContext);

  //extrayendo data del backend
  useEffect(() => {
    const getExpenseData = async () => {
      setIsFetching(true);
      const expenses = await fetchExpenseData();
      setIsFetching(false);
      expensesCotext.setExpenses(expenses);
    };
    getExpenseData();
  }, []);

  const recentExpenses = expensesCotext.expenses.filter((expense) => {
    const today = new Date(); //fecha actual
    const date7DaysAgo = getDateMinusDays(today, 7); //fecha de hace 7 dias

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  if (isfetching) {
    return <Loader />;
  }

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
