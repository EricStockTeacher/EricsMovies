import { Text, View, Image, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>Welcome to Erics Movies</Text>
        <Button onPress={() => router.navigate('/movies')} title="Movies"></Button>
       </View>
  );
}
