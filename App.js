import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>SharpTech New Mobile Applications Project</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24, // Adjust the font size as needed
    textAlign: 'center',
    color: 'blue'
  },
})