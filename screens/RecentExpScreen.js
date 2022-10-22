import { View, Text } from 'react-native';
import React, {useContext}  from 'react';
import ExpenseOutput from '../components/ExpenseOutput';
import { tempExpenses } from '../Util/DUMMY';
import {ManageExpensesContext } from '../context/manageExpensesContext';
import { getDateMinusDays } from '../Util/date';

export default function RecentExpScreen() {

  const expensesCotext = useContext(ManageExpensesContext);

  const recentExpenses = expensesCotext.expenses.filter((expense) => {
    const today = new Date(); //fecha actual
    const date7DaysAgo = getDateMinusDays(today,7) //fecha de hace 7 dias

    return (expense.date >= date7DaysAgo) && (expense.date <= today);

  })

  return (
    <>
      <ExpenseOutput expenses={recentExpenses} periodName="Last 7 days"/>
    </>
  );
}
