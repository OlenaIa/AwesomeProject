import { StyleSheet, ImageBackground, Linking, Text, TextInput, TouchableOpacity, View, Pressable, Image } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';
// import addPhoto from '../images/addPhoto';
import Add from '../img/add.svg'

export const RegistrationScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={back} resizeMode="cover" style={styles.imageBack}>
                <View style={stylesRegister.container}>
                    <View style={stylesRegister.imgWrap}>
                        {/* <Image source={addPhoto}
                            style={stylesRegister.imgAvatar} /> */}
                        <Pressable style={stylesRegister.imgBtnAdd}
                    // onPress={onPressFunction}
                    >
                            <Add width={25} height={25} fill='red' />
</Pressable>
                    </View>
                    <Text style={styles.title}>Реєстрація</Text>
                    <View style={stylesRegister.formWrap}>
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
                            style={stylesRegister.touchWrapForm}
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
        flexDirection: 'column',
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
        right: -6.25,
    },
    formWrap: {
        width: 343,

        gap: 16,
        marginBottom: 43,
        position: 'relative',
    },
    touchWrapForm: {
        position: 'absolute',
        bottom: 31,
        right: 16,
    }
});