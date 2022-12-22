import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, KeyboardAvoidingView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {auth} from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Logged in with: ", user.email);
        })
        .catch(error => alert(error.message))
    }
    return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={styles.logo} source={require('./olympus_logo.png')} />
        
        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                selectionColor={'#E6C466'}
                style={styles.input}
            />
            <Text style={styles.inputText}>Password</Text>
            <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                selectionColor={'#E6C466'}
                style={styles.input}
                secureTextEntry
            />
        </View>
        <View style={styles.forgotContainer}>
            <Button style={styles.forgotPass}
                title="Forgot Password?">
            </Button>
        </View>
        

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={[styles.loginButton]}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}
// 
export default LoginScreen

const styles = StyleSheet.create({
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