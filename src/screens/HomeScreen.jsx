import React, {useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MovieCard from '../components/MovieCard';
import moviesApi from '../services/moviesApi';

export default function HomeScreen({ navigation }){

    const [ filmes, setFilmes ] =useState([])
    const [ search, setSearch ] =useState("")

    useEffect(() => {
        for(let i=1; i<=5; i++){
            moviesApi.get(`movie/popular/${moviesApi.defaults.params.api_key}&${moviesApi.defaults.params.language}&page=${i}`)
            // como se fosse: https://api.themoviedb.org/3/movie/popular
            .then((response) => {
                response.data.results.map((filme) => {
                    filme.vote_average = filme.vote_average.toFixed(1);
                });

                setFilmes((filmes) => [...filmes, ...response.data.results]); // Pegando tudo oq vier de response.
            })
        }    

        
    });
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