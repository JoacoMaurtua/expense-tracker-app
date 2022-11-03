import { View, StyleSheet } from 'react-native';
import React, { useLayoutEffect, useContext, useState } from 'react';
import IconButton from '../components/IconButton';
import { GlobalStyles } from '../styles';
import { ManageExpensesContext } from '../context/manageExpensesContext';
import ExpenseForm from '../components/ExpenseForm';
import {
  storeExpenseData,
  editExpenseData,
  deleteExpenseData,
} from '../Util/http';
import Loader from '../components/Loader';
import ErrorOverlay from '../components/ErrorOverlay';

export default function ManageExpScreen({ navigation, route }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState();

  const editedExpenseId = route.params?.expenseId;

  const expensesContext = useContext(ManageExpensesContext); //extrayendo el contexto de estados

  const isEditing = !!editedExpenseId; //con vierto en booleano editedExpenseId acorde a si se cumple o no su condicion

  const defaultValues = expensesContext.expenses.find(
    (defaultExpense) => defaultExpense.id === editedExpenseId
  );

  //establecer titulo acorde a si se edita o crea un expense
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  async function deleteExpense() {
    setIsSubmitting(true);
    try {
      expensesContext.deleteExpense(editedExpenseId);
      await deleteExpenseData(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete this expense, please try later');
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesContext.updateExpense(editedExpenseId, expenseData);
        await editExpenseData(editedExpenseId, expenseData);
      } else {
        const id = await storeExpenseData(expenseData);
        expensesContext.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error){
        setError('Could not save this expense, please try later')
        setIsSubmitting(false);
    }
 
  }

  if (isSubmitting) {
    return <Loader />;
  }

  function onError() {
    setError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={onError} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        submitLabelButton={isEditing ? 'Edit' : 'Add'}
        onSubmit={confirmHandler}
        defaultValues={defaultValues}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={'#f08080'}
            size={36}
            onPress={deleteExpense}
            style={styles.iconTrash}
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

  iconTrash: {
    marginRight: 0,
  },
});

/* 
con route.params?.expenseId --> Condicion: Si params no es undefined

si const ediredExpenseId no es undefined --> Modo edicion porque ya existia un id

si es undefined --> Modo creacion porque ates no habia un id, recien se crea
*/
