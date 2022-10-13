import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ExpenseItem from '../components/ExpenseItem';

function renderExpenses(itemData) {
  return (
    <ExpenseItem
      key={itemData.item.id}
      title={itemData.item.title}
      date={itemData.item.date}
      amount={itemData.item.amount}
    />
  );
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem = {renderExpenses}
      keyExtractor = {(item)=>item.id}
     // style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
