import { View, StyleSheet, Text} from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../styles'

export default function ExpenseOutput({expenses, periodName, fallbackText}) { //aqui debo traeer la data de context
  
  let content = <Text style={styles.infoText}>{fallbackText}</Text>

  if(expenses.length > 0) {
    content = <ExpensesList expenses={expenses}/>
  }

  return (
    <View style={styles.container}>
      <ExpenseSummary expenses = {expenses} periodName={periodName}/>
      {content}
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText:{
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
})
