import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function ExpenseForm({onCancel, onSubmit, submitLabelButton}) {
  const [inputs, setInputs] = useState({
    amount: '',
    date: '',
    title: '',
  });

  function inputChangeHandler(inputIdentifer, enteredValue) {
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifer]: enteredValue, //[name]:value
      };
    });
  };

  function submitHandler(){

  }

  const { amount, date, title } = inputs;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.columContainer}>
        <Input
          style={styles.rowContainer}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: amount,
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
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: date,
          }}
        />
      </View>

      <Input
        name="title"
        value={title}
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'title'),
          value: title,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitLabelButton}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },

  columContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rowContainer: {
    flex: 1,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
