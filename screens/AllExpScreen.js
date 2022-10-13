import { View, Text } from 'react-native'
import React from 'react'
import ExpenseOutput from '../components/ExpenseOutput'
import { tempExpenses } from '../DUMMY';

export default function AllExpScreen() {
  return (
    <View>
      <ExpenseOutput expenses={tempExpenses} periodName="Foreva"/>
    </View>
  )
}