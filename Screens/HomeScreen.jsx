import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { styles } from "../App"
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'; 
import smallAvatar from '../img/smallAvatar.jpg'
import { PostItem } from "../Components/PostItem";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={stylesHomeScreen.header}>
                <Text style={stylesHomeScreen.titleH3}>Публікації</Text>
                <Pressable style={stylesHomeScreen.exitIcon}
                // onPress={onPressFunction}
                >
                    <Ionicons name="exit-outline" size={24} color="#BDBDBD" />
                </Pressable>
            </View>
            <View style={stylesHomeScreen.card}>
                <Image source={smallAvatar} />
                <View>
                    <Text style={stylesHomeScreen.cardName}>Natali Romanova</Text>
                    <Text style={stylesHomeScreen.cardEmail}>email@example.com</Text>
                
                </View>
            </View>
            <PostItem/>
            <View style={[stylesHomeScreen.footer, stylesHomeScreen.footerBorder]}>
                <Pressable
                // onPress={onPressFunction}
                >
                    <AntDesign name="appstore-o" size={24} color="rgba(33, 33, 33, 0.8)" />
                </Pressable>
                <Pressable style={stylesHomeScreen.footerButton}
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

export const stylesHomeScreen = StyleSheet.create({
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
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 39,
        marginTop: 'auto',
        paddingTop: 9,
        
        paddingBottom: 34,
        alignItems: 'center',
    },
    footerBorder: {
        borderTopColor: 'rgba(0, 0, 0, 0.30)',
        borderTopWidth: 0.5,
    },
    footerButton: {
        justifyContent: 'center',
        width: 70,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FF6C00',
        alignItems: 'center',
    }
});