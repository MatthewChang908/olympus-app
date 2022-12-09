import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const WelcomeScreen = ({navigation}) => {
  return (
    <View
        style={styles.container}
    >
      <Image style={styles.logo} source={require('./fading_logo.png')} />
      

      <View style={styles.buttonContainer}>
          <TouchableOpacity
              onPress={() => {navigation.navigate('Login')}}
              style={[styles.loginButton]}>
              <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => {navigation.navigate('Signup')}}
              style={[styles.loginButton, styles.signUpButton]}>              
              <Text style={styles.signUpText}>Join OLYMPUS</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
// 
export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 250,
    },  
    buttonContainer: {
        width:'90%',
        marginBottom: 100,
    },
    loginButton: {
        backgroundColor: "black",
        width: '100%',
        padding: 0,
        borderRadius: 12,
        alignItems: "center",
        height: 48,
        borderColor: "#E6C466",
        borderWidth: 2,
        justifyContent: 'center',
    },
    loginText: {
        color: "white",
        fontSize: 20,
    },
    signUpButton: {
        backgroundColor: "#E6C466",
        marginTop: 20,
        
    },
    signUpText: {
        color: "black",
        fontSize: 20,
    }
})