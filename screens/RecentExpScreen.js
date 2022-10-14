import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import ExpenseOutput from '../components/ExpenseOutput';
import { tempExpenses } from '../Util/DUMMY';

export default function RecentExpScreen({ navigation }) {
  function navigateHandler() {
    console.log('pressed!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon="md-add" onPress={navigateHandler} color="white" />
        );
      },
    });
  }, [navigation, navigateHandler]);

  return (
    <>
      <ExpenseOutput expenses={tempExpenses} periodName="Last 7 days" navigation={navigation}/>
    </>
  );
}
