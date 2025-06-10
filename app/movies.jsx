import { View, Image, Button } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from "react"
import Movie from "../components/Movie.jsx";

const t2 = require("../assets/images/terminator2.jpg");
const titanic = require("../assets/images/titanic.jpg");
const happy = require("../assets/images/happyGilmour.jpg")

const images = { "t2" : t2, "titanic": titanic, "happy": happy};

import movieData from "../assets/movies.json";
console.log(movieData);

export default function Index() {
  const router = useRouter();
  const  [movieIndex, setMovieIndex] = useState(0);

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

