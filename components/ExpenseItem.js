import { Pressable, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../styles';
import { getFormattedDate } from '../Util/date';
import { useNavigation } from '@react-navigation/native';

export default function ExpenseItem({ title, date, amount }) {
  const navigation = useNavigation();

  function handleOnPress(){
    navigation.navigate('ManageExpense')
  }

  return (
    <Pressable onPress={handleOnPress} style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.dateText}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed:{
    opacity: 0.5,
  },

  container: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    padding: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dataContainer: {
    flexDirection: 'column',
  },

  titleText: {
    color: GlobalStyles.colors.primary50,
    fontSize: 16,
    fontWeight: 'bold',
  },

  dateText: {
    color: GlobalStyles.colors.primary50,
    fontSize: 13,
  },

  amountContainer: {
    backgroundColor: GlobalStyles.colors.primary50,
    alignItems: 'center',
    padding: 8,
    borderRadius: 3,
    overflow: 'hidden',
    justifyContent: 'center',
    minWidth: 75,
  },

  amountText: {
    color: GlobalStyles.colors.primary700,
    fontWeight: 'bold',
  },
});
