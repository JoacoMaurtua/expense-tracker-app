import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';

export default function ManageExpScreen({ navigation, route }) {

  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;  //con vierto en booleano editedExpenseId acorde a si se cumple o no su condicion

  //establecer titulo acorde a si se edita o crea un expense
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing? 'Edit Expense': 'Add Expense'
    })
  },[navigation, isEditing])


  return (
    <View>
      <Text>ManageExpScreen</Text>
    </View>
  );
}

/* 
con route.params?.expenseId --> Condicion: Si params no es undefined

si const ediredExpenseId no es undefined --> Modo edicion porque ya existia un id

si es undefined --> Modo creacion porque ates no habia un id, recien se crea
*/
