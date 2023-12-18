import { Image, Pressable, StyleSheet, Text, View, TextInput } from "react-native"
import { styles } from "../App"
import { MaterialIcons , AntDesign, Feather, SimpleLineIcons  } from '@expo/vector-icons'; 
import smallAvatar from '../img/smallAvatar.jpg'
import { stylesPostsScreen } from "./PostsScreen";
import 'react-native-gesture-handler';
import { PostCreateCard } from "../Components/PostCreateCard";
import CameraPage from "../Components/Camera";

export const CreatePostsScreen = () => {
    return (
        <View style={styles.container}>
            {/* <View style={stylesPostsScreen.header}>
                <Text style={stylesPostsScreen.titleH3}>Створити публікацію</Text>
                <Pressable style={stylesCreatePostsScreen.backIcon}
                // onPress={onPressFunction}
                >
                    <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
                </Pressable>
            </View> */}
            <PostCreateCard/>
            {/* <CameraPage/> */}
            {/* <View style={stylesPostsScreen.footer}>
                <Pressable style={stylesCreatePostsScreen.footerDeleteButton}
                // onPress={onPressFunction}
                >
                    <AntDesign name="delete" size={24} color="rgba(189, 189, 189, 1)" />
                </Pressable>
            </View> */}
        </View>
    )
};

export const stylesCreatePostsScreen = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        left: 10,
        bottom: 11,
    },
    footerDeleteButton: {
        justifyContent: 'center',
        width: 70,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
    }
});