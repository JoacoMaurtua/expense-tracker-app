import React, { useContext, useEffect, useState } from 'react';
import ExpenseOutput from '../components/ExpenseOutput';
import { ManageExpensesContext } from '../context/manageExpensesContext';
import { getDateMinusDays } from '../Util/date';
import { fetchExpenseData } from '../Util/http';
import Loader from '../components/Loader';
import ErrorOverlay from '../components/ErrorOverlay';

export default function RecentExpScreen() {
  const [isfetching, setIsFetching] = useState(true);

  const [error, setError] = useState();

  const expensesCotext = useContext(ManageExpensesContext);

  //extrayendo data del backend
  useEffect(() => {
    const getExpenseData = async () => {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenseData();
        expensesCotext.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch data!');
      }
      setIsFetching(false);
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

  function onError(){
    setError(null)
  }

  if (error && !isfetching) {
    return <ErrorOverlay message={error} onConfirm={onError}/>;
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
