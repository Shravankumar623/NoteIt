import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SignInScreen from './src/screens/SignInScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      
      <SignInScreen/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC', // Set the background color to VERYLIGT BLUE
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 24, // Adjust the font size as needed
    textAlign: 'center',
    color: 'blue'
  },
})