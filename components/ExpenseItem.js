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
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    padding: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
   
    
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
    padding: 6,
    borderRadius: 3,
    overflow: 'hidden',
    justifyContent: 'center'
  },

  amountText:{
    color: GlobalStyles.colors.primary700,
    fontWeight: 'bold',
   
  }

})