import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Linking,
    View,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { styles } from '../App';
import { useState } from 'react';

export const LogInForm = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [isFocus, setIsFocus] = useState({
        email: false,
        password: false
    });

    const onSubmitForm = () => {
        console.log('email =>', email);
        console.log('password =>', password);
        setEmail('');
        setPassword('');
    };

    const onFocusToggle = (inputName) => {setIsFocus({[inputName]: true})};
    const onBlurToggle = (inputName) => {setIsFocus({[inputName]: false})};

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={stylesLogin.container}>
                <Text style={styles.title}>Увійти</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={styles.formWrap}>
                        <TextInput
                            style={[styles.input, (isFocus.email ? styles.inputFocus : styles.inputBlur) ]}
                            autoFocus
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
                    <Text style={styles.textButton}>Увійти</Text>
                </Pressable>
                <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
                    <Text style={styles.visiblePassword}>
                        Немає акаунту? Зареєструватися
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
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