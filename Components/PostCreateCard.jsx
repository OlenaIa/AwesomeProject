import { useState, useEffect, useRef } from "react";
import { Image, Pressable, StyleSheet, Text, View, TextInput } from "react-native"
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'; 
import { styles } from "../App";
import CameraPage from "./Camera";
import * as Location from 'expo-location';

export const PostCreateCard = ({ navigation }) => {
    const [photo, setPhoto] = useState(null);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [coordinate, setCoordinate] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            };

            let location = await Location.getCurrentPositionAsync({});
            const coords = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };

            setCoordinate(coords);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (coordinate) {
        text = JSON.stringify(coordinate);
    };
    
    const onSubmitForm = () => {
        console.log('title =>', title);
        console.log('location =>', location);
        console.log('coordinate =>', coordinate);
        console.log('text =>', text);

        navigation.navigate("PostsScreen");
        setPhoto('');
        setTitle('');
        setLocation('');
    };

    return (
        <View style={stylesPostCreateCard.card}>
            <View>
                <View style={stylesPostCreateCard.photo}>
                    {photo && <Image source={{ uri: photo }} style={stylesPostCreateCard.photoImg} />}
                    {!photo && <CameraPage setPhoto={setPhoto} style={stylesPostCreateCard.photoImg} />}
                    {photo && <Pressable style={[stylesPostCreateCard.buttonPhoto, { position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.30)' }]}
                    // onPress={onPressFunction}
                    >
                        <MaterialIcons name="photo-camera" size={24} color="white" />
                    </Pressable>}
                </View>
                <Text style={stylesPostCreateCard.photoTitle}>{photo ? 'Редагувати фото' : 'Завантажити фото'}</Text>
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
                style={[styles.button, (photo && title.length > 0 && location.length > 0 ? { backgroundColor: '#FF6C00' } : { backgroundColor: '#F6F6F6' })]}
                disabled={(photo && title.length > 0 && location.length > 0 ? false : true)}
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
        // width: '100%',
        alignItems: 'center',
        gap: 32,
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 111,
        marginTop: 32,
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
    photoImg: {
        width: '100%',
        height: '100%',
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