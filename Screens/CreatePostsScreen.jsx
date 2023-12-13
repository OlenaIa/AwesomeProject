import { Image, Linking, Pressable, StyleSheet, Text, View, TextInput } from "react-native"
import { styles } from "../App"
import { MaterialIcons , AntDesign, Feather, SimpleLineIcons  } from '@expo/vector-icons'; 
import smallAvatar from '../img/smallAvatar.jpg'
import { stylesPostsScreen } from "./PostsScreen";
import 'react-native-gesture-handler';
import { useState } from "react";

export const CreatePostsScreen = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');

    const onSubmitForm = () => {
        console.log('title =>', title);
        console.log('location =>', location);
        setTitle('');
        setLocation('');
    };

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
                <View style={[styles.formWrap, { marginBottom: 0 }]}>
                    <TextInput
                        style={stylesCreatePostsScreen.inputPost}
                        onChangeText={setTitle}
                        value={title}
                        placeholder="Назва..."
                        keyboardType="default" />
                    <TextInput
                        style={[stylesCreatePostsScreen.inputPost, { paddingLeft: 20 }]}
                        onChangeText={setLocation}
                        value={location}
                        placeholder="Місцевість..."
                        keyboardType="default" />
                    <View style={stylesCreatePostsScreen.locationIcon}>
                        <SimpleLineIcons name="location-pin" size={16} color="#BDBDBD" />
                    </View>
                </View>
                <Pressable
                    style={[styles.button, (title.length > 0 && location.length > 0 ? { backgroundColor: '#FF6C00' } : { backgroundColor: '#F6F6F6' })]}
                    disabled={(title.length > 0 && location.length > 0 ? false : true)}
                    onPress={onSubmitForm}
                >
                    <Text
                        style={[styles.textButton,
                        (title.length > 0 && location.length > 0 ? { color: '#FFF' } : { color: '#BDBDBD' })]}>
                            Опублікувати
                    </Text>
                </Pressable>
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

export const stylesCreatePostsScreen = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        left: 10,
        bottom: 11,
    },
    card: {
        // width: '100%',
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
    inputPost: {
        height: 50,
        width: '100%',
        paddingTop: 16,
        paddingBottom: 15,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        color: '#212121',
    },
    locationIcon: {
        position: 'absolute',
        left: 0,
        bottom: 31,
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