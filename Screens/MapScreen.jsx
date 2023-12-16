import { Pressable, StyleSheet, Text, View } from "react-native"
import { styles } from "../App"
import { AntDesig  } from '@expo/vector-icons'; 
import { stylesPostsScreen } from "./PostsScreen";
import { stylesCreatePostsScreen } from "./CreatePostsScreen";

import 'react-native-gesture-handler';
import { PostCreateCard } from "../Components/PostCreateCard";

export const MapScreen = () => {
    return (
        <View style={styles.container}>
            <View style={stylesPostsScreen.header}>
                <Text style={stylesPostsScreen.titleH3}>Мапа</Text>
                <Pressable style={stylesCreatePostsScreen.backIcon}
                // onPress={onPressFunction}
                >
                    <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
                </Pressable>
            </View>
                </View>
    )
};