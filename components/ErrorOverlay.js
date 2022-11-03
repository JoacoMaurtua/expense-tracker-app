import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../styles'

export default function ErrorOverlay({message, onConfirm}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>A error ocurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm} title="Acept"/>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:25,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary700,
  },

  text:{
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },

  title:{
    fontSize:20,
    fontWeight: 'bold',
  }
})