import React, {useEffect, useState} from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button} from 'react-native'
import {auth} from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {useNavigation} from "@react-navigation/core";
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const SignupScreen = () => {
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

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.header}>
                <Button style={styles.back}
                    onPress={() => {navigation.navigate('Welcome')}}
                    title="< Back"
                    color="#E6C466">
                </Button>
                <Image style={styles.logo} source={require('../assets/olympus_logo.png')} />
                <Button style={styles.back}
                    title="< Back"
                    color="#000000">
                </Button>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Name</Text>
                <TextInput
                    selectionColor={'#E6C466'}
                    style={styles.input}
                />
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    selectionColor={'#E6C466'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                    selectionColor={'#E6C466'}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.inputText}>Phone</Text>
                 <TextInput
                    selectionColor={'#E6C466'}
                    style={styles.input}
                    keyboardType = 'numeric'
                />
                
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.loginButton, styles.signUpButton]}>
                    <Text style={styles.signUpText}>Join OLYMPUS</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default SignupScreen

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
        justifyContent: "center",
        alignItems: "center",
    },
    olympusText:{
        color: "white",
        fontSize: "48px",
        fontWeight: "bold",
    },
    inputContainer:{
        width: '90%'
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
        width:'80%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    loginButton: {
        backgroundColor: "black",
        width: '100%',
        padding: 0,
        borderRadius: 10,
        alignItems: "center",
        height: 48,
        borderColor: "#E6C466",
        borderWidth: 2
    },
    loginText: {
        color: "white"
    },
    signUpButton: {
        backgroundColor: "#E6C466",
        marginTop: 5,
        borderWidth: 2,
        padding: 0,
        justifyContent: 'center',
    },
    signUpText: {
        color: "black",
        fontSize: 20,
    }


})