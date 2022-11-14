import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>

            <Text style={{textAlign:"center"}}>Olympus</Text>
            <View>
                <TextInput
                    style={styles.ep}
                    defaultValue="Email"
                />
                <TextInput
                    style={styles.ep}
                    defaultValue="Password"
                />
                <Button title={"Log in"}/>
            </View>
            <StatusBar style="auto"/>
        </View>
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
