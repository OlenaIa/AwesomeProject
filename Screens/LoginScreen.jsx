import { ImageBackground, View } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';
import { LogInForm } from '../Components/LofInForm';

export const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={back} resizeMode="cover" style={styles.imageBack}>
                <LogInForm />       
            </ImageBackground>
        </View>
    )
};