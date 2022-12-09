import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen options={{headerShown: false}} name={"Welcome"} component={WelcomeScreen}/>
                <Stack.Screen options={{headerShown: false}} name={"Signup"} component={SignupScreen}/>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen options={{headerShown: false}} name={"Login"} component={LoginScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    ep: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: "center",
        marginBottom: 5,
    }
});
