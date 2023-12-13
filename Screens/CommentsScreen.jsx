import { Image, Linking, Pressable, StyleSheet, Text, View, TextInput } from "react-native"
import { styles } from "../App"
import { MaterialIcons , AntDesign, Feather, SimpleLineIcons, Ionicons   } from '@expo/vector-icons'; 
import post from '../img/post.jpg'
import { stylesPostsScreen } from "./PostsScreen";
import { stylesCreatePostsScreen } from "./CreatePostsScreen";

import 'react-native-gesture-handler';
import { useState } from "react";

export const CommentsScreen = () => {
    const [comment, setComment] = useState('');


    return (
        <View style={styles.container}>
            <View style={stylesPostsScreen.header}>
                <Text style={stylesPostsScreen.titleH3}>Коментарі</Text>
                <Pressable style={stylesCreatePostsScreen.backIcon}
                // onPress={onPressFunction}
                >
                    <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
                </Pressable>
            </View>
            <View style={stylesCreatePostsScreen.card}>
                <View style={stylesCreatePostsScreen.photo}>
                    <Image source={post} />
                </View>
                <View style={stylesCommentsScreen.wrapComments}>
                    <View style={stylesCommentsScreen.commentItem}>
                        <View style={stylesCommentsScreen.avatar}>
                            {/* <Image source={post} /> */}
                        </View>
                        <View style={stylesCommentsScreen.commentTextWrap}>
                            <Text style={stylesCommentsScreen.text}>Comment</Text>
                            <Text style={stylesCommentsScreen.date}>Date</Text>
                        </View>
                    </View>
                </View>
                
            </View>
            <View style={stylesCommentsScreen.commInputWrap}>
                <View style={position = 'relative'}>
                    <TextInput
                        style={stylesCommentsScreen.commentInput}
                        onChangeText={setComment}
                        value={comment}
                        placeholder="Коментувати..."
                    />
                    <Pressable style={stylesCommentsScreen.buttonPush}
                    // onPress={onPressFunction}
                    >
                        <Ionicons name="arrow-up" size={24} color="#FFFFFF" />
                    </Pressable>
                </View>
                
            </View>
        </View>
    )
};

const stylesCommentsScreen = StyleSheet.create({
    wrapComments: {
        gap: 24,
    },
    commentItem: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'flex-start'
    },
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 28,
        height: 28,
        flexShrink: 0,
        // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
        borderRadius: 28,
        backgroundColor: 'red',
    },
    commentTextWrap: {
        width: 299,
        padding: 16,
        gap: 8,
        borderBottomRightRadius: 6,
        borderTomRightRadius: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    text: {
        fontSize: 13,
        lineHeight: 18,
    },
    date: {
        color: '#BDBDBD',
        textAlign: 'right',
        fontSize: 10,
    },
    commInputWrap: {
        alignItems: 'center',
        marginTop: 'auto',
    },
    commentInput: {
        height: 50,
        width: 343,
        borderWidth: 1,
        borderRadius: 100,
        padding: 16,
        paddingBottom: 15,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        color: '#212121',
        fontFamily: 'RobotoMedium',
        backgroundColor: '#F6F6F6',
    },
    buttonPush: {
        position: 'absolute',
        right: 8,
        bottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 34,
        height: 34,
        backgroundColor: '#FF6C00',
        borderRadius: 34,
    },
});