import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';

import { useContext } from 'react';
import { MovieContext } from '../components/MovieContext';

export default function UpdateMovies() {


    const [currentMovie, setCurrentMovie] = useState(0)

    const { movieData, setMovieData } = useContext(MovieContext);

    const [title, setTitle] = useState(movieData[currentMovie].title)
    const [year, setYear] = useState(movieData[currentMovie].year)
    const [actors, setActors] = useState(movieData[currentMovie].actors);
    const [poster, setPoster] = useState(movieData[currentMovie].image)

    const changeYear = (value) => {
        const updatedYear = parseInt(value);
        setYear(updatedYear);
    }

    const changeActors = (value) => {
        const updatedArray = value.split(',');
        setActors(updatedArray)
        //console.log(updatedArray)
    }

    const updateMovieData = () => {

        const updatedData = {
            title: title,
            year: year,
            actors: actors,
            image: poster
        }

        console.log(updatedData);
        movieData[currentMovie] = updatedData
        setMovieData(movieData)
    }

    const changeMovieIndex = (value) => {
        const index = parseInt(value)
        setTitle(movieData[index].title);
        setActors(movieData[index].actors);
        setYear(movieData[index].year)
        setCurrentMovie(index);
    }

    return (
        <>
            <Text>Movie Index</Text>
            <Picker
              selectedValue={currentMovie}
              onValueChange={(itemValue, itemIndex) =>
                changeMovieIndex(itemIndex)
              }>
              <Picker.Item label="Movie 1" value="m1" />
              <Picker.Item label="Movie 2" value="m2" />
              <Picker.Item label="Movie 3" value="m3" />
            </Picker>

            <Text>Title</Text>
            <TextInput value={title} onChangeText={setTitle}/>

            <Text>Year</Text>
            <TextInput value={year.toString()} onChangeText={changeYear}/>

            <Text>Actors</Text>
            <TextInput value={actors.toString()} onChangeText={changeActors} />

            <Text>Poster</Text>
            <Picker
              selectedValue={poster}
              onValueChange={(itemValue, itemIndex) =>
                setPoster(itemValue)
              }>
              <Picker.Item label="Terminator 2 #1" value="t2" />
              <Picker.Item label="Terminator 2 #2" value="t2_2nd" />
              <Picker.Item label="Titanic #1" value="titanic" />
              <Picker.Item label="Happy #1" value="happy" />
            </Picker>
            <Button title="Update" onPress={updateMovieData} />

        </>

    )


}