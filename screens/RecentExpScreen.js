import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton';
import ExpensesList from '../components/ExpensesList';
import ExpenseOutput from '../components/ExpenseOutput';

export default function RecentExpScreen({navigation}) {

  function navigateHandler(){
    console.log('pressed!')
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon='md-add'
            onPress={navigateHandler}
            color="white"
          />
        );
      },
    });

  },[navigation,navigateHandler]);

  const tempExpenses = [
    {id: 1, title: 'Libros', date: '22/10/03', amount: 200},
    {id: 2, title: 'Comida', date: '22/10/06', amount: 300},
    {id: 3, title: 'Ropa', date: '22/10/10', amount: 400},
    {id: 4, title: 'Cuentas', date: '22/10/14', amount: 600},
  ];

  return (
    <View>
      <ExpenseOutput expenses={tempExpenses}/>
    </View>
  )
}