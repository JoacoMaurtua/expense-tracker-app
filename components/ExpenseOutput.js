import { View, Text } from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'



export default function ExpenseOutput({expenses, periodName}) { //aqui debo traeer la data de context
  return (
    <View>
      <ExpenseSummary expenses = {expenses} periodName={periodName}/>
      <ExpensesList expenses = {expenses}/>
    </View>
  )
}
