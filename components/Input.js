import { View, TextInput, Text, StyleSheet} from 'react-native'
import React from 'react';
import { GlobalStyles } from '../styles';

export default function Input({label, invalid, style, textInputConfig, name, value}) {
  const inputStyles = [styles.input];

  if(textInputConfig && textInputConfig.multiline){
    inputStyles.push(styles.inputMultiLine)
  }

  if(invalid){
    inputStyles.push(styles.invalidInput)
  }
  
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
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
  },

  invalidLabel:{
    color: GlobalStyles.colors.error50
  },

  invalidInput:{
    backgroundColor: GlobalStyles.colors.error500
  }
})

