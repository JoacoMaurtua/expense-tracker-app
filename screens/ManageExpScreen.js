import { View, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { GlobalStyles } from '../styles';

export default function ManageExpScreen({ navigation, route }) {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId; //con vierto en booleano editedExpenseId acorde a si se cumple o no su condicion

  //establecer titulo acorde a si se edita o crea un expense
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpense() {
    console.log('delete expense');
  }

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },

  deleteContainer:{
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2, 
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
})

/* 
con route.params?.expenseId --> Condicion: Si params no es undefined

si const ediredExpenseId no es undefined --> Modo edicion porque ya existia un id

si es undefined --> Modo creacion porque ates no habia un id, recien se crea
*/
