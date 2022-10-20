import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ExpenseItem from '../components/ExpenseItem';


export default function ExpensesList({ expenses }) {

  function renderExpenses(itemData) {

    const item = itemData.item

    //desestructurar las props del objeto:
    const expenseItemProps = {
      id: item.id,
      title: item.title,
      date: item.date,
      amount: item.amount
    }

   /*  //funcion para enviar a otra vista: 
    function pressHandler(){
      navigation.navigate('ManageExpense', {...expenseItemProps})
    }; */

    return (
      <ExpenseItem
        {...expenseItemProps}
      />
    );
  }
  
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
