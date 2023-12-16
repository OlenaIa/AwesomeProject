import { Image, Pressable, StyleSheet, Text, View } from "react-native"
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
            <View style={stylesPostsScreen.card}>
                <Image source={smallAvatar} />
                <View>
                    <Text style={stylesPostsScreen.cardName}>Natali Romanova</Text>
                    <Text style={stylesPostsScreen.cardEmail}>email@example.com</Text>
                
                </View>
            </View>
        
        </View>
    )
};

export const stylesPostsScreen = StyleSheet.create({
    header: {
        position: 'relative',
        paddingTop: 55,
        marginBottom: 32,
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
        right: 16,
        bottom: 10,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginHorizontal: 16,
    },
    cardName: {
        fontFamily: 'RobotoBold',
        fontSize: 13,
    },
    cardEmail: {
        color: 'rgba(33, 33, 33, 0.80)',
        fontSize: 11,
    },
});