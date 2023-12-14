import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, TextInput } from "react-native"
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'; 
import { styles } from "../App"

export const PostCreateCard = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');

    const onSubmitForm = () => {
        console.log('title =>', title);
        console.log('location =>', location);
        setTitle('');
        setLocation('');
    };

    return (
        <View style={stylesPostCreateCard.card}>
            <View>
                <View style={stylesPostCreateCard.photo}>
                    {/* <Image source={smallAvatar} /> */}
                    <Pressable style={stylesPostCreateCard.buttonPhoto}
                    // onPress={onPressFunction}
                    >
                        <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
                    </Pressable>
                </View>
                <Text style={stylesPostCreateCard.photoTitle}>Завантажити фото</Text>
            </View>
            <View style={[styles.formWrap, { marginBottom: 0 }]}>
                <TextInput
                    style={stylesPostCreateCard.inputPost}
                    onChangeText={setTitle}
                    value={title}
                    placeholder="Назва..."
                    keyboardType="default" />
                <TextInput
                    style={[stylesPostCreateCard.inputPost, { paddingLeft: 20 }]}
                    onChangeText={setLocation}
                    value={location}
                    placeholder="Місцевість..."
                    keyboardType="default" />
                <View style={stylesPostCreateCard.locationIcon}>
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
    )
};

export const stylesPostCreateCard = StyleSheet.create({
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
});