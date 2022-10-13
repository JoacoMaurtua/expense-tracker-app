import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {GlobalStyles} from '../styles';

export default function ExpenseSummary({expenses, periodName}) {

  const expensesSum = expenses.reduce((sum,expense)=>{
    return sum + expense.amount
  }, 0);
  

  return (
    <View style={styles.container}>
      <Text style={styles.periodText}>{periodName}</Text>
      <Text style={styles.sumText}>${expensesSum.toFixed(2)}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  periodText:{
    fontSize: 12,
    color: GlobalStyles.colors.primary400
  },

  sumText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500
  }
})