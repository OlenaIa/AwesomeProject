import { Image, Linking, Pressable, StyleSheet, Text, View } from "react-native"
import { styles } from "../App"
import { MaterialIcons , AntDesign, Feather } from '@expo/vector-icons'; 
import smallAvatar from '../img/smallAvatar.jpg'
import { stylesPostsScreen } from "./PostsScreen";
import { TextInput } from "react-native-gesture-handler";

export const CreatePostsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={stylesPostsScreen.header}>
                <Text style={stylesPostsScreen.titleH3}>Створити публікацію</Text>
                <Pressable style={stylesCreatePostsScreen.backIcon}
                // onPress={onPressFunction}
                >
                    <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
                </Pressable>
            </View>
            <View style={stylesCreatePostsScreen.card}>
                <View>
                    <View style={stylesCreatePostsScreen.photo}>
                        {/* <Image source={smallAvatar} /> */}
                        <Pressable style={stylesCreatePostsScreen.buttonPhoto}
                        // onPress={onPressFunction}
                        >
                            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
                        </Pressable>
                    </View>
                    
                    <Text style={stylesCreatePostsScreen.photoTitle}>Завантажити фото</Text>
                </View>
                <View>

                
                </View>
            </View>
            <View style={stylesPostsScreen.footer}>
                
                <Pressable style={stylesCreatePostsScreen.footerDeleteButton}
                // onPress={onPressFunction}
                >
                    <AntDesign name="delete" size={24} color="rgba(189, 189, 189, 1)" />
                </Pressable>
                
            </View>
        </View>
    )
};

const stylesCreatePostsScreen = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        left: 10,
        bottom: 11,
    },
    card: {
        alignItems: 'center',
        gap: 32,
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 111,
    },
    photo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 343,
        height: 240,
        flexShrink: 0,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        marginBottom: 8,
    },
    buttonPhoto: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
    },
    photoTitle: {
        color: '#BDBDBD',
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