import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { getFormattedDate } from '../Util/date';
import { GlobalStyles } from '../styles';

export default function ExpenseForm({
  onCancel,
  onSubmit,
  submitLabelButton,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true, //convierte a booleano
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    title: {
      value: defaultValues ? defaultValues.title : '',
      isValid: true,
    },
  });

  //console.log(defaultValues.amount.toString());

  const { amount, date, title } = inputs;

  function inputChangeHandler(inputIdentifer, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifer]: { value: enteredValue, isValid: true }, //[name]:value
      };
    });
  }

  function submitHandler() {
    //nuevo expense editado o agregado
    const expenseData = {
      amount: +amount.value, //convertir string a entero
      date: new Date(date.value),
      title: title.value,
    };

    //validacion de campos
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const titleIsValid = expenseData.title.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !titleIsValid) {
      /* Alert.alert('Invalid Inputs! Please check your inputs'); */
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          title: { value: curInputs.title.value, isValid: titleIsValid },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.title.isValid 

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
            value: amount.value,
          }}
          invalid={!amount.isValid}
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
            value: date.value,
          }}
          invalid={!date.isValid}
        />
      </View>

      <Input
        name="title"
        value={title}
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'title'),
          value: title.value,
        }}
        invalid={!title.isValid}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>
      )}
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
  errorText:{
    textAlign: 'center',
    color: GlobalStyles.colors.error50,
    margin: 8
  }
});
