import { Image, Pressable, StyleSheet, Text, View, TextInput } from "react-native"
import { styles } from "../App"
import { AntDesign, Ionicons   } from '@expo/vector-icons'; 
import post from '../img/post.jpg'
import { stylesPostsScreen } from "./PostsScreen";
import { stylesPostCreateCard } from "../Components/PostCreateCard";
import {CommentItem} from "../Components/CommentItem"
import 'react-native-gesture-handler';
import { useState } from "react";
import { stylesCreatePostsScreen } from "./CreatePostsScreen";

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
            <View style={stylesPostCreateCard.card}>
                <View style={stylesPostCreateCard.photo}>
                    <Image source={post} />
                </View>
                <CommentItem />
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