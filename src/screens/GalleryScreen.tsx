import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function GalleryScreen(){
    return(
        <View style={{flex: 1, backgroundColor: 'blue'}}>
            <Text>Home works!</Text>
            <StatusBar style="auto"/>
        </View>
    )
}