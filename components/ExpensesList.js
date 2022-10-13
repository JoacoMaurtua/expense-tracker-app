import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ExpenseItem from '../components/ExpenseItem';



export default function ExpensesList({expenses}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {expenses.map((expense)=>(
          <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>
        ))}
      </ScrollView>
    </View>
  )
};


const styles = StyleSheet.create({
 container:{
  padding: 16,
 }
})