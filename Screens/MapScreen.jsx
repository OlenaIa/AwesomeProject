import { Pressable, StyleSheet, Text, View, Dimensions  } from "react-native"
import { styles } from "../App"
import { AntDesign  } from '@expo/vector-icons'; 
import { stylesPostsScreen } from "./PostsScreen";
import { stylesCreatePostsScreen } from "./CreatePostsScreen";
import MapView, { Marker } from "react-native-maps";


import 'react-native-gesture-handler';
import { PostCreateCard } from "../Components/PostCreateCard";

export const MapScreen = () => {
    return (
        <View style={styles.container}>
            {/* <View style={stylesPostsScreen.header}>
                <Text style={stylesPostsScreen.titleH3}>Мапа</Text>
                <Pressable style={stylesCreatePostsScreen.backIcon}
                // onPress={onPressFunction}
                >
                    <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
                </Pressable>
            </View> */}
            <MapView
                style={stylesMap.mapStyle}
                region={{
                    latitude: 36.3290103,
                    longitude: 30.451453,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType="standard"
                minZoomLevel={5}
                onMapReady={() => console.log("Map is ready")}
                onRegionChange={() => console.log("Region change")}
            >
                <Marker
                    title="I am here"
                    coordinate={{ latitude: 36.3290103, longitude: 30.451453 }}
                    description='Hello'
                />
            </MapView>
        </View>
    )
};

const stylesMap = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});