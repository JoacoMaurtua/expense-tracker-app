import { View, TextInput, Text, StyleSheet} from 'react-native'
import React from 'react';
import { GlobalStyles } from '../styles';

export default function Input({label, style, textInputConfig, name, value}) {
  const inputStyles = [styles.input];

  if(textInputConfig && textInputConfig.multiline){
    inputStyles.push(styles.inputMultiLine)
  }
  
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig}/>
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer:{
    marginHorizontal: 4, 
    marginVertical: 9
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
  },

  inputMultiLine:{
    minHeight: 100,
    textAlignVertical: 'top',
  }
})

