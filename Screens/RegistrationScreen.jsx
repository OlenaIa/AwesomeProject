import { StyleSheet, ImageBackground, Linking, Text, TouchableOpacity, View, Pressable } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';
import { RegistrationForm } from '../Components/RegistrationForm';
import { RegistrationAvatar } from '../Components/RegistrationAvatar';

export const RegistrationScreen = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={back} resizeMode="cover" style={styles.imageBack}>
                <View style={stylesRegister.container}>
                    <RegistrationAvatar />
                    <Text style={styles.title}>Реєстрація</Text>
                    <RegistrationForm />
                    <Pressable style={styles.button}
                    // onPress={onPressFunction}
                    >
                        <Text style={styles.textButton}>Зареєструватися</Text>
                    </Pressable>
                    <TouchableOpacity onPress={() => Linking.openURL('#')}>
                        <Text style={styles.visiblePassword}>
                            Вже є акаунт? Увійти
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
};

const stylesRegister = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: "flex-end",
        paddingHorizontal: 16,
        paddingTop: 92,
        paddingBottom: 78,
        width: '100%',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
    },
    imgWrap: {
        position: 'absolute',
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    imgAvatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});