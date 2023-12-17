import { Image, StyleSheet, Text, View } from "react-native"
import { styles } from "../App"
import smallAvatar from '../img/smallAvatar.jpg'

export const PostsScreen = () => {
    return (
        <View style={styles.container}>
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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 32,
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