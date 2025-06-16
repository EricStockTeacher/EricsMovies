import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MovieContext } from "../components/MovieContext";
import { useState } from 'react';
import movieObject from "../assets/movies.json";

export default function RootLayout() {

  const [movieData, setMovieData] = useState(movieObject);
  console.log(movieData);

  return (
      <MovieContext.Provider value={{movieData, setMovieData }}>
      <Tabs>
        <Tabs.Screen name="index"
            options={{
            title: "Movie Home",
            tabBarIcon: ({color}) => <MaterialIcons size={28} name="home"  color={color} />,
            }}
        />
        <Tabs.Screen name="updateMovies"
                    options={{
                    title: "Update Movies",
                    tabBarIcon: ({color}) => <MaterialIcons size={28} name="home"  color={color} />,
                    }}
                />
        <Tabs.Screen name="movies"
                    options={{
                    title: "Movie Info",
                    tabBarIcon: ({color}) => <MaterialIcons size={28} name="movie"  color={color} />,
                    }}
                />
      </Tabs>
      </MovieContext.Provider>
      )
}
