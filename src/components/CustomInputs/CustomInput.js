import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {


  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} value={value} onChange={setValue} secureTextEntry={secureTextEntry} />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input:{

    }
})