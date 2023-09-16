import { StyleSheet, ImageBackground, Linking, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';

export const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={back} resizeMode="cover" style={styles.imageBack}>
                <View style={stylesLogin.container}>
                    <Text style={styles.title}>Увійти</Text>
                    <View style={styles.formWrap}>
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