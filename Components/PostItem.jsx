import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import post from '../img/post.jpg'
import { stylesCreatePostsScreen } from '../Screens/CreatePostsScreen';
import { FontAwesome, AntDesign, SimpleLineIcons  } from '@expo/vector-icons'; 

export const PostItem = () => {
    return (
        <View style={stylesPostItem.postWrap}>
            <View style={stylesCreatePostsScreen.photo}>
                <Image source={post} />
            </View>
            <Text style={stylesPostItem.textTitle}>Ліс</Text>
            <View style={stylesPostItem.interactiveWrap}>
                <View style={[stylesPostItem.likesWrap, { gap: 24 }]}>
                    <View style={stylesPostItem.likesWrap}>
                        <Pressable>
                            <FontAwesome name="comment" size={24} color="#FF6C00" />
                        </Pressable>
                        <Text>8</Text>
                    </View>
                    <View style={stylesPostItem.likesWrap}>
                        <Pressable>
                            <AntDesign name="like2" size={24} color="#FF6C00" />
                        </Pressable>
                        <Text>153</Text>
                    </View>
                </View>
                <View style={[stylesPostItem.likesWrap, { gap: 4 }]}>
                    <SimpleLineIcons name="location-pin" size={20} color="#BDBDBD" />
                        <Text style={stylesPostItem.locationText}>Ukraine</Text>
                </View>
            </View>
        </View>
    )
};

export const stylesPostItem = StyleSheet.create({
    postWrap: {
        width: 343,
        gap: 8,
        alignItems: 'center,'
    },
    textTitle: {
        fontFamily: 'RobotoMedium',
    },
    interactiveWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    likesWrap: {
        flexDirection: 'row',
        gap: 6,
    },
    locationText: {
        textDecorationLine: 'underline',
    }
});