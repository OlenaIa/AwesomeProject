import {
    StyleSheet,
    Linking,
    Text,
    TouchableOpacity,
    View,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TextInput
} from 'react-native';
import { styles } from '../App';
import { useState } from 'react';
import { RegistrationAvatar } from '../Components/RegistrationAvatar';

export const RegistrationForm = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [isFocus, setIsFocus] = useState({
        login: false,
        email: false,
        password: false
    });
    const onSubmitForm = () => {
        console.log('login =>', login);
        console.log('email =>', email);
        console.log('password =>', password);
        setLogin('');
        setEmail('');
        setPassword('');
    };

const onFocusToggle = (inputName) => {setIsFocus({[inputName]: true})};
    const onBlurToggle = (inputName) => {setIsFocus({[inputName]: false})};

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={stylesRegister.container}>
                <RegistrationAvatar />
                <Text style={styles.title}>Реєстрація</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={styles.formWrap}>
                        <TextInput
                            style={[styles.input, (isFocus.login ? styles.inputFocus : styles.inputBlur) ]}
                            autoFocus
                            onFocus={() => onFocusToggle('login')}
                            onBlur={() => onBlurToggle('login')}
                            onChangeText={setLogin}
                            value={login}
                            placeholder="Логін"
                            keyboardType="default"
                        />
                        <TextInput
                            style={[styles.input, (isFocus.email ? styles.inputFocus : styles.inputBlur) ]}
                            onFocus={() => onFocusToggle('email')}
                            onBlur={() => onBlurToggle('email')}
                            
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Адреса електронної пошти"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={[styles.input, (isFocus.password ? styles.inputFocus : styles.inputBlur) ]}
                            onFocus={() => onFocusToggle('password')}
                            onBlur={() => onBlurToggle('password')}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Пароль"
                            secureTextEntry={showPassword}
                        />
                        <TouchableOpacity
                            style={styles.touchWrapForm}
                            onPress={() => setShowPassword(!showPassword)}>
                            <Text style={styles.visiblePassword}>
                                {showPassword ? 'Показати' : 'Приховати'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <Pressable style={styles.button}
                onPress={onSubmitForm}
                >
                    <Text style={styles.textButton}>Зареєструватися</Text>
                </Pressable>
                <TouchableOpacity onPress={() => navigation.navigate("Login",
                    // { sessionId: 45, userId: "22e24" }
                )}>
                    <Text style={styles.visiblePassword}>
                        Вже є акаунт? Увійти
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
};

export const stylesRegister = StyleSheet.create({
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