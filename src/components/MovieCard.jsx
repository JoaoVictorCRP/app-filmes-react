import {Text, View, StyleSheet, Image } from "react-native";
import React from "react";

export default function MovieCard({ filme }){
    const dataOriginal = new Date(filme.release_date)
    const dataFormata = new Intl.DateTimeFormat("pt-BR").format(dataOriginal)

    return(
        <View>
            <Image 
                style={StyleSheet.Image}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${filme.poster_path}`}}
            />
            <Text>Título: `${filme.title}`</Text>
        </View>
    )
}