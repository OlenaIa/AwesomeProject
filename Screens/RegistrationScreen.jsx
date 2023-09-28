import { ImageBackground, View } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';
import { RegistrationForm } from '../Components/RegistrationForm';
import { useNavigation } from '@react-navigation/native';

export const RegistrationScreen = () => {
        const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={back} resizeMode="cover" style={styles.imageBack}>             
                <RegistrationForm navigation={navigation} />
            </ImageBackground>
        </View>
    )
};