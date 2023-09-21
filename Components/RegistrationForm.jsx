import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../App';
import { useState } from 'react';

export const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(true);

    return (
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
    )
};