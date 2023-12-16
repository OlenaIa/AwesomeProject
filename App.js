import { StyleSheet, View, Button } from 'react-native';
import {RegistrationScreen} from './Screens/RegistrationScreen';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { LoginScreen } from './Screens/LoginScreen';
import { PostsScreen } from './Screens/PostsScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { CreatePostsScreen } from './Screens/CreatePostsScreen';
import { CommentsScreen } from './Screens/CommentsScreen';
import { ProfileScreen } from './Screens/ProfileScreen';

const MainStack = createStackNavigator(); // вказує на групу навігаторів
const { Navigator, Screen } = MainStack;

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
          // <CommentsScreen />
//  <ProfileScreen /> 
   //   <CreatePostsScreen />
// <PostsScreen/> 
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        {/* <View style={styles.container}> */}
         <Screen name="Registration" component={RegistrationScreen} />
        <Screen name="Login" component={LoginScreen}
          // options={{
          //   title: "Home screen",
          //   headerStyle: {
          //     backgroundColor: "blue",
          //   },
          //   headerTintColor: "green",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //     fontSize: 20,
          //   },
          //   headerRight: () => (
          //     <Button
          //       onPress={() => alert("This is a button!")}
          //       title="Press me"
          //       color="black"
          //     />
          //   ),
          // }}
        />
        <Screen name="Home" component={PostsScreen} />
        <Screen name="Profile" component={ProfileScreen} />
        <Screen name="Comments" component={CommentsScreen} />
        <Screen name="CreatePosts" component={CreatePostsScreen} />
        <Screen name="Map" component={MapScreen} />

      {/* </View> */}
      </Navigator>
      </NavigationContainer>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#212121',
  },
  imageBack: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'RobotoMedium',
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  avatar: {
    position: 'absolute',
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  formWrap: {
    width: 343,
    gap: 16,
    marginBottom: 43,
    position: 'relative',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    paddingBottom: 15,
    borderWidth: 1,
    color: '#212121',
  },
  inputFocus: {
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF'
  },
  inputBlur: {
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6'
  },
  touchWrapForm: {
    position: 'absolute',
    bottom: 31,
    right: 16,
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
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  }
});
