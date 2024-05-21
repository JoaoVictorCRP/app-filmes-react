import React, {useState, useEffect } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
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
            .catch((error) => {
              console.log(error)
            })
        }    
    });

    // Filtro de busca
    const filteredMovies = filmes.filter((filme) => 
      filme.title.toLowerCase().includes(search.toLowerCase())
    )

    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Pesquisar'
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          data={filteredMovies}
          keyExtractor={(filme, index) => `${filme.id}-${index}`}
          renderItem={ ({item}) => (
            <TouchableOpacity // Botão de detalhes do filme
              onPress={ () => 
                navigation.navigate("DetalhesFilme", {
                  title: item.title,
                  poster_path: item.poster_path
                })
              }>
                <MovieCard filme={item}/>
              </TouchableOpacity>
          )}
        />
      </View>
    );
};


const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#c0c0c0",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#292F33",
  },
});