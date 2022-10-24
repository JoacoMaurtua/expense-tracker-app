import { View, StyleSheet } from 'react-native';
import React, { useLayoutEffect, useContext } from 'react';
import IconButton from '../components/IconButton';
import { GlobalStyles } from '../styles';
import Button from '../components/Button';
import { ManageExpensesContext } from '../context/manageExpensesContext';
import ExpenseForm from '../components/ExpenseForm';

export default function ManageExpScreen({ navigation, route }) {
  const editedExpenseId = route.params?.expenseId;

  const expensesContext = useContext(ManageExpensesContext); //extrayendo el contexto de estados

  const isEditing = !!editedExpenseId; //con vierto en booleano editedExpenseId acorde a si se cumple o no su condicion

  //establecer titulo acorde a si se edita o crea un expense
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpense() {
    expensesContext.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesContext.updateExpense(editedExpenseId, {
        title: 'Test edit',
        amount: 200,
        date: new Date('2022-10-22'),
      });
    } else {
      expensesContext.addExpense({
        title: 'Test add',
        amount: 200,
        date: new Date('2022-10-22'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm/>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={'#f08080'}
            size={36}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
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

/* 
con route.params?.expenseId --> Condicion: Si params no es undefined

si const ediredExpenseId no es undefined --> Modo edicion porque ya existia un id

si es undefined --> Modo creacion porque ates no habia un id, recien se crea
*/
