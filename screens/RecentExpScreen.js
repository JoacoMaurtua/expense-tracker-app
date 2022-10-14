import { View, Text } from 'react-native';
import React  from 'react';
import IconButton from '../components/IconButton';
import ExpenseOutput from '../components/ExpenseOutput';
import { tempExpenses } from '../Util/DUMMY';

export default function RecentExpScreen() {

  return (
    <>
      <ExpenseOutput expenses={tempExpenses} periodName="Last 7 days"/>
    </>
  );
}
