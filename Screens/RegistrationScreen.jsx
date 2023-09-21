import { ImageBackground, View } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';
import { RegistrationForm } from '../Components/RegistrationForm';

export const RegistrationScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={back} resizeMode="cover" style={styles.imageBack}>             
                    <RegistrationForm />
            </ImageBackground>
        </View>
    )
};