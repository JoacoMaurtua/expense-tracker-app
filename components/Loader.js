import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../styles'

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white"/>
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
  }
})