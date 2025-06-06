import { Text, View, Image } from "react-native";

export default function Movie( {movieData, image}) {

    return (
        <>
            <Text>Title: {movieData.title}</Text>
            <Text>Year: {movieData.year}</Text>
            {
               movieData.actors.map( (actor) => <Text key={actor}>{actor} </Text> )
            }
            <Image source={image}/>
        </>
    )
}