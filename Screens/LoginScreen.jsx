import { StyleSheet, ImageBackground, Linking, Text, TouchableOpacity, View, Pressable } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';
import { LogInForm } from '../Components/LofInForm';

export const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={back} resizeMode="cover" style={styles.imageBack}>
                <View style={stylesLogin.container}>
                    <Text style={styles.title}>Увійти</Text>
                    <LogInForm />       
                    <Pressable style={styles.button}
                    // onPress={onPressFunction}
                    >
                        <Text style={styles.textButton}>Увійти</Text>
                    </Pressable>
                    <TouchableOpacity onPress={() => Linking.openURL('#')}>
                        <Text style={styles.visiblePassword}>
                            Немає акаунту? Зареєструватися
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
};

const stylesLogin = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: "flex-end",
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 144,
        width: '100%',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
    },
});