import { Image, Linking, Pressable, StyleSheet, Text, View } from "react-native"
import { styles } from "../App"
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'; 
import smallAvatar from '../img/smallAvatar.jpg'

export const PostsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={stylesPostsScreen.header}>
                <Text style={stylesPostsScreen.titleH3}>Публікації</Text>
                <Pressable style={stylesPostsScreen.exitIcon}
                // onPress={onPressFunction}
                >
                    <Ionicons name="exit-outline" size={24} color="#BDBDBD" />
                </Pressable>
            </View>
            <View>
                <Image source={smallAvatar}/>
            </View>
            <View style={stylesPostsScreen.footer}>
                <Pressable 
                // onPress={onPressFunction}
                >
                    <AntDesign name="appstore-o" size={24} color="rgba(33, 33, 33, 0.8)" />
                </Pressable>
                <Pressable style={stylesPostsScreen.footerButton}
                // onPress={onPressFunction}
                >
                    <Ionicons name="add" size={24} color="white" />
                </Pressable>
                <Pressable 
                // onPress={onPressFunction}
                >
                    <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
                </Pressable>
            </View>
        </View>
    )
};

const stylesPostsScreen = StyleSheet.create({
    header: {
        position: 'relative',
        paddingTop: 55,
        borderBottomColor: 'rgba(0, 0, 0, 0.30)',
        borderBottomWidth: 0.5,
        paddingBottom: 11,
        alignItems: 'center',
    },
    titleH3: {
        fontSize: 17,
    fontFamily: 'RobotoMedium',
lineHeight: 22,
letterSpacing: -0.408,
    },
    exitIcon: {
        position: 'absolute',
        right: 10,
        bottom: 11,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 39,
        marginTop: 'auto',
        paddingTop: 9,
        borderTopColor: 'rgba(0, 0, 0, 0.30)',
        borderTopWidth: 0.5,
        paddingBottom: 34,
        alignItems: 'center',
    },
    footerButton: {
        justifyContent: 'center',
        width: 70,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FF6C00',
        alignItems: 'center',
    }
})