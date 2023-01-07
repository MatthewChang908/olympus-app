import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, KeyboardAvoidingView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {auth} from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"

const ForgotPassScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

        <Image style={styles.logo} source={require('../assets/olympus_logo.png')} />

        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                selectionColor={'#E6C466'}
                style={styles.input}
            />
        </View>
        

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.loginButton]}>
                <Text style={styles.loginText}>Send Reset Email</Text>
            </TouchableOpacity>
        </View>
        <Button style={styles.forgotPass}
                onPress={() => {navigation.navigate('Login')}}
                title="Go Back"
                color="#E6C466">
        </Button>
    </KeyboardAvoidingView>
  )
}
// 
export default ForgotPassScreen

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: "row",
        width: '90%',
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    back: {
        color: "#E6C466",
    },
  container: {
      backgroundColor: "black",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
  logo: {
      alignSelf: "center"
  },
  inputContainer:{
      alignSelf: "center",
      width: '90%'
  },
  forgotContainer: {
      alignSelf:"left"
  },
  forgotPass: {
    marginLeft: 50
  },
  input: {
      color: "#E6C466",
      paddingHorizontal: 0,
      paddingVertical: 0,
      marginTop: 5,
      borderBottomColor: 'white',
      borderBottomWidth: 2,
      fontSize: 20,
  },
  inputText: {
      color: "white",
      paddingBottom: 0,
      paddingTop: 20,
      fontSize: 20,
  },
  buttonContainer: {
      width:'90%',
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
  },
  loginButton: {
      backgroundColor: "#E6C466",
      width: '100%',
      padding: 0,
      borderRadius: 10,
      alignItems: "center",
      height: 48,
      borderColor: "#E6C466",
      borderWidth: 2,
      justifyContent: "center",
  },
  loginText: {
      color: "black",
      fontSize: 20,
  },


})