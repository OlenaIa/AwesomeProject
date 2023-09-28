import { ImageBackground, View } from 'react-native';
import { styles } from '../App';
import back from '../img/back.jpg';
import { LogInForm } from '../Components/LofInForm';
import { useNavigation, useRoute } from '@react-navigation/native';

export const LoginScreen = () => {
    const navigation = useNavigation();
    // const { params: { userId } } = useRoute();
    
    return (
        <View style={styles.container}>
            <ImageBackground source={back} resizeMode="cover" style={styles.imageBack}>
                <LogInForm navigation={navigation}/>       
            </ImageBackground>
        </View>
    )
};