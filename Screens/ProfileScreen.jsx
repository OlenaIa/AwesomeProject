import { ImageBackground, View, Text, Pressable, StyleSheet } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';
import { stylesRegister } from '../Components/RegistrationForm';
import { PostItem } from '../Components/PostItem';
import { stylesPostsScreen } from './PostsScreen';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'; 


export const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={back} resizeMode="cover" style={styles.imageBack}>
                <View style={stylesRegister.container}>
<View style={styles.avatar}>
                    {/* <Image source={addPhoto}
                            style={stylesRegister.imgAvatar} /> */}
                    <Pressable style={stylesRegister.imgBtnAdd}
                    // onPress={onPressFunction}
                    >
                        <Ionicons name="add-circle-outline" size={25} color="#FF6C00" />
                    </Pressable>
                    </View>
                    <Text style={styles.title}>Natali Romanova</Text>
                    <View style={stylesProfileScreen.postList}>
                        <PostItem />
                    </View>
                    <View style={[stylesPostsScreen.footer, stylesPostsScreen.footerBorder]}>
                        <Pressable
                        // onPress={onPressFunction}
                        >
                            <AntDesign name="appstore-o" size={24} color="rgba(33, 33, 33, 0.8)" />
                        </Pressable>
                        <Pressable style={stylesPostsScreen.footerButton}
                        // onPress={onPressFunction}
                        >
                            <Feather name="user" size={24} color="white" />
                        </Pressable>
                        <Pressable
                        // onPress={onPressFunction}
                        >
                            <Ionicons name="add" size={24} color="rgba(33, 33, 33, 0.8)" />
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

export const stylesProfileScreen = StyleSheet.create({
    postList: {
        width: 343,
        gap: 35,
        alignItems: 'center',
        marginBottom: 43,
    },
});