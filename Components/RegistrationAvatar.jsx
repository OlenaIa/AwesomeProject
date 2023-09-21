import { View, Pressable, Image, StyleSheet } from 'react-native';
import { styles } from '../App';
import { Ionicons } from '@expo/vector-icons'; 

export const RegistrationAvatar = () => {
    return (
        <View style={styles.avatar}>
            {/* <Image source={addPhoto}
                            style={stylesRegister.imgAvatar} /> */}
            <Pressable style={stylesAvatar.imgBtnAdd}
            // onPress={onPressFunction}
            >
                <Ionicons name="add-circle-outline" size={25} color="#FF6C00" />
            </Pressable>
        </View>
    )
};

const stylesAvatar = StyleSheet.create({
    imgBtnAdd: {
        width: 25,
        height: 25,
        position: 'absolute',
        bottom: 13.5,
        right: -12.5,
    },
});