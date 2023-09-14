import { StyleSheet, View } from 'react-native';
import {RegistrationScreen} from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
    'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
    'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),

  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RegistrationScreen />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    fontStyle: 'normal',

  },
  imageBack: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'normal',
    fontFamily: 'RobotoMedium',
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    paddingBottom: 15,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    color: '#212121',
  },
  button: {
    width: 343,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    
marginBottom: 16,
  },
  textButton: {
color: '#FFF',
    textAlign: 'center',
  },
  visiblePassword: {
    color: '#1B4371',

  },
  textUnderButton: {
        color: '#1B4371',
textShadowColor: 'rgba(0, 0, 0, 0.25)',
textShadowOffset: {width: 0, height: 4},
  textShadowRadius: 4,
  }
});
