import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

import { useContext } from 'react';
import { MovieContext } from '../components/MovieContext';

export default function UpdateMovies() {


    const [currentMovie, setCurrentMovie] = useState(0)
    const { movieData, setMovieData } = useContext(MovieContext);

    const [title, setTitle] = useState(movieData[currentMovie].title)
    const [year, setYear] = useState(movieData[currentMovie].year)
    const [actors, setActors] = useState(movieData[currentMovie].actors);

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
            image: "t2"
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
            <TextInput value={currentMovie.toString()} onChangeText ={changeMovieIndex}/>

            <Text>Title</Text>
            <TextInput value={title} onChangeText={setTitle}/>

            <Text>Year</Text>
            <TextInput value={year.toString()} onChangeText={changeYear}/>

            <Text>Actors</Text>
            <TextInput value={actors.toString()} onChangeText={changeActors} />

            <Button title="Update" onPress={updateMovieData} />

        </>

    )


}