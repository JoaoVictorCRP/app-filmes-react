import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'
import { _View } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import CadastroScreen from './CadastroScreen.jsx';

const LoginScreen = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigation = useNavigation();

    const handleLogin = async () => {
        const user = await AsyncStorage.getItem("user")
        if(!user){
            alert("Nenhum usuário cadastrado.");
            return;
        };

        const userJson = JSON.parse(user);
        if(userJson.email === email && userJson.password === password){
            navigation.navigate('Homescreen')
        }
    }


    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

// styles é como se fosse o css mesmo
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#221F1F",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: "80%",
      backgroundColor: "#fff",
    },
    button: {
      backgroundColor: "#e50914",
      borderRadius: 5,
      padding: 10,
      width: "80%",
      alignItems: "center",
      marginBottom: 10,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 18,
    },
});

export default LoginScreen