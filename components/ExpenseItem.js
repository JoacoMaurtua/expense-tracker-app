import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { GlobalStyles } from '../styles';

export default function ExpenseItem({title, date, amount}) {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>{title}</Text>
        <Text style={styles.dataText}>{date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: GlobalStyles.colors.primary500,
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    padding: 3,
    margin: 4,
    flexDirection: 'row',
   
  },

  dataContainer:{
    flexDirection: 'column'
  },

  dataText:{
    color: GlobalStyles.colors.primary50,
    fontSize: 18,
  },

  amountContainer:{
    backgroundColor: GlobalStyles.colors.primary50,
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 180,
    width: 60,
    borderRadius: 8,
    overflow: 'hidden',
  },

  amountText:{
    color: GlobalStyles.colors.primary700,
    marginTop: 15,
  }

})