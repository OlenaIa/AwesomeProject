import { StyleSheet, ImageBackground, Linking, Text, TextInput, TouchableOpacity, View, Pressable, Image } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';
import { Ionicons } from '@expo/vector-icons'; 

export const RegistrationScreen = () => {
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
                    <Text style={styles.title}>Реєстрація</Text>
                    <View style={styles.formWrap}>
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Логін"
                            keyboardType="default"
                        />
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Адреса електронної пошти"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Пароль"
                            keyboardType="visible-password"
                        />
                        <TouchableOpacity
                            style={styles.touchWrapForm}
                            onPress={() => Linking.openURL('#')}>
                            <Text style={styles.visiblePassword}>
                                Показати
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    imgBtnAdd: {
        width: 25,
        height: 25,
        position: 'absolute',
        bottom: 13.5,
        right: -12.5,
    },
});