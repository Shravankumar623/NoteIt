import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import SharpTechLogo from '../assets/SharpTechLogo.png';
import Logo_2 from '../assets/Logo_2.png';
import Logo from '../../../Noteit/assests/images/Logo.png';
import CustomInput from '../components/CustomInputs/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';




const SignInScreen = () => {

    const [username, setUserName] = useState('');
    const [password, setPassowrd] = useState('');

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Signed In Sucessfully");
    }
    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    return (
        <View style={styles.root}>
            <Image source={Logo_2} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
            <CustomInput placeholder='UserName' value={username} setValue={setUserName} secureTextEntry={false} />
            <CustomInput placeholder='Passwowrd' value={password} setValue={setPassowrd} secureTextEntry={true} />
            <CustomButton text="Sign In" onPress={onSignInPressed} type="PRIMARY" />
            <CustomButton text="Forgot Passowrd" onPress={onForgotPasswordPressed} type="TERTIARY" />

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,

    }
})

export default SignInScreen