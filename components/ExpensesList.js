import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ExpenseItem from '../components/ExpenseItem';

const tempExpenses = [
  {id: 1, title: 'Libros', date: '22/10/03', amount: 200},
  {id: 2, title: 'Comida', date: '22/10/06', amount: 300},
  {id: 3, title: 'Ropa', date: '22/10/10', amount: 400},
  {id: 4, title: 'Cuentas', date: '22/10/14', amount: 600},
];


export default function ExpensesList() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {tempExpenses.map((expense)=>(
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