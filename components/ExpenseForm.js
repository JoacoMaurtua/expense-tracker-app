import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';

export default function ExpenseForm() {
  const [inputs, setInputs] = useState({
    amount: '',
    date: '',
    title: '',
  });

  function amountChangeHandler(event) {
    const {name,value} = event.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const {amount, date, title} = inputs;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.columContainer}>
        <Input
          name="amount"
          value={amount}
          style={styles.rowContainer}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          name="date"
          value={date}
          style={styles.rowContainer}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>

      <Input
        name="title"
        value={title}
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form:{
    marginTop: 5,
  },

  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },

  columContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rowContainer:{
    flex: 1,
  }
})
