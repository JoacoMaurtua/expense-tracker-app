import { View, TextInput, Text, StyleSheet} from 'react-native'
import React from 'react';
import { GlobalStyles } from '../styles';

export default function Input({label,textInputConfig}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig}/>
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer:{
    marginHorizontal: 4, 
    marginVertical: 16
  },

  label:{
    fontSize: 12, 
    color: GlobalStyles.colors.primary100,
    marginBottom: 4
  },

  input:{
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6, 
    fontSize: 18,
  }
})

