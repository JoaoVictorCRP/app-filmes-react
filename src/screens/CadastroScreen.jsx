import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'
import { _View } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const CadastroScreen = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigation = useNavigation();

    const handleCadastro = async () => {
        const user = () => {
            email, password 
        };
        if(!email || !password){ // Verifica preenchimento
            alert("Preencha todos os campos")
            return
        };
        await AsyncStorage.setItem("user", JSON.stringify(user)) // Colocando usuário no Storage
        navigation.navigate("Login")
    };
};

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

export default CadastroScreen;