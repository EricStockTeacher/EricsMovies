import { View, Image, Button } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from "react"
import Movie from "../components/Movie.jsx";
import { useContext } from 'react';
import { MovieContext } from '../components/MovieContext';

const t2 = require("../assets/images/terminator2.jpg");
const t2_2nd = require("../assets/images/terminator2_2nd.jpg");
const titanic = require("../assets/images/titanic.jpg");
const happy = require("../assets/images/happyGilmour.jpg")

const images = { "t2" : t2, "t2_2nd": t2_2nd, "titanic": titanic, "happy": happy};



export default function Index() {
  const router = useRouter();
  const { movieData } = useContext(MovieContext);
  const  [movieIndex, setMovieIndex] = useState(0);
  console.log(movieData)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Movie movieData={movieData[movieIndex]} image={images[movieData[movieIndex].image]} />
      <Button title="Switch Movie" onPress={ () => setMovieIndex( (movieIndex + 1) % movieData.length)}/>
          <Button onPress={() => router.navigate('/')} title="Home"></Button>
    </View>
  );
}

