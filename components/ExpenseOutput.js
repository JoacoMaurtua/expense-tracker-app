import { View, StyleSheet} from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../styles'

export default function ExpenseOutput({expenses, periodName}) { //aqui debo traeer la data de context
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses = {expenses} periodName={periodName}/>
      <ExpensesList expenses = {expenses}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  }
})
