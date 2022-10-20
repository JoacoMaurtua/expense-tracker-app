import { View, Text } from 'react-native';
import React, {useContext} from 'react';
import ExpenseOutput from '../components/ExpenseOutput';
import {ManageExpensesContext } from '../context/manageExpensesContext';

export default function AllExpScreen() {

  const expensesCotext = useContext(ManageExpensesContext)

  return (
    <>
      <ExpenseOutput expenses={expensesCotext.expenses} periodName="Foreva" />
    </>
  );
}
