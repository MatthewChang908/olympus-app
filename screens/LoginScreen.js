import React, {useEffect, useState} from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native'
import {auth} from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {useNavigation} from "@react-navigation/core";
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Logged in with: ", user.email);
        })
        .catch(error => alert(error.message))
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image source={require('./olympus_logo.png')} />
            <Text style={styles.olympusText}>OLYMPUS</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Name</Text>
                <TextInput
                    placeholderTextColor = "white"
                    selectionColor={'#E6C466'}
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.input}
                />
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    placeholderTextColor = "white"
                    selectionColor={'#E6C466'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                    placeholderTextColor = "white"
                    selectionColor={'#E6C466'}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.inputText}>Phone</Text>
                 <TextInput
                    placeholderTextColor = "white"
                    selectionColor={'#E6C466'}
                    value={email}
                    onChangeText={text => setPhone(text)}
                    style={styles.input}
                />
                
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.loginButton, styles.signUpButton]}>
                    <Text style={styles.signUpText}>Join OLYMPUS</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    olympusText:{
        color: "white",
        fontSize: "48px",
        fontWeight: "bold",
    },
    inputContainer:{
        width: '80%'
    },
    input: {
        color: "#E6C466",
        paddingHorizontal: 0,
        paddingVertical: 10,
        marginTop: 5,
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    },
    inputText: {
        color: "white",
        paddingBottom: 0,
        paddingTop: 20,
    },
    buttonContainer: {
        width:'80%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    loginButton: {
        backgroundColor: "black",
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        height: 50,
        borderColor: "#E6C466",
        borderWidth: 2
    },
    loginText: {
        color: "white"
    },
    signUpButton: {
        backgroundColor: "#E6C466",
        marginTop: 5,
        borderWidth: 2
    },
    signUpText: {
        color: "black"
    }


})