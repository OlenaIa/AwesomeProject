import { View, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen } from '../Screens/PostsScreen';
import { CreatePostsScreen } from '../Screens/CreatePostsScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();
const { Navigator, Screen } = Tabs;

const options = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
    tabBarActiveBackgroundColor: '#FF6C00',
    tabBarInactiveBackgroundColor: 'white',
};

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={[stylesHomeTabs.footer, stylesHomeTabs.footerBorder]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const { tabBarActiveTintColor,
                    tabBarInactiveTintColor,
                    tabBarActiveBackgroundColor,
                    tabBarInactiveBackgroundColor } = options;

                const isFocused = state.index === index;
                const colorBgTab = isFocused ? tabBarActiveBackgroundColor : tabBarInactiveBackgroundColor;
                const colorTab = isFocused ? tabBarActiveTintColor : tabBarInactiveTintColor;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <Pressable
                        onPress={onPress}
                        key={route.key}
                    >
                        <View style={[stylesHomeTabs.footerButton, { backgroundColor: colorBgTab }]}>
                            {route.name === 'PostsScreen' && <AntDesign name="appstore-o" size={24} color={colorTab} />}
                            {route.name === 'CreatePosts' && <Ionicons name="add" size={24} color={colorTab} />}
                            {route.name === 'Profile' && <Feather name="user" size={24} color={colorTab} />}
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
};

export function HomeTabsBar() {
        const navigation = useNavigation();

    return (
        <Navigator
            initialRouteName="PostsScreen"
            tabBar={props => <MyTabBar {...props} />}
        >
            <Screen
                name="PostsScreen"
                component={PostsScreen}
                options={{
                    headerStyle: {
                        height: 83,
                        borderBottomColor: 'rgba(0, 0, 0, 0.30)',
                        borderBottomWidth: 0.5,
                    },
                    headerTitle: 'Публікації',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 17,
                        fontFamily: 'RobotoMedium'
                    },
                    headerBackVisible: false,
                    headerTintColor: '#212121',
                    headerLeft: () => { },
                    headerRight: () => (
                        <Pressable style={stylesHomeTabs.exitIcon}
                        onPress={() => {navigation.navigate("Login")}}
                        >
                            <Ionicons name="exit-outline" size={24} color="#BDBDBD" />
                        </Pressable>
                    ),
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
                    tabBarActiveBackgroundColor: '#FF6C00',
                    tabBarInactiveBackgroundColor: 'white'
                }}
            />
            <Screen
                name="CreatePosts"
                component={CreatePostsScreen}
                options={{
                    headerStyle: {
                        height: 83,
                        borderBottomColor: 'rgba(0, 0, 0, 0.30)',
                        borderBottomWidth: 0.5,
                    },
                    headerTitle: 'Створити публікацію',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 17,
                        fontFamily: 'RobotoMedium'
                    },
                    headerLeft: () => {
                <Pressable style={stylesHomeTabs.backIcon}
                onPress={navigation.goBack}
                >
                    <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
                </Pressable>
                    },
                    headerTintColor: '#212121',
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
                    tabBarActiveBackgroundColor: '#FF6C00',
                    tabBarInactiveBackgroundColor: 'white'
                }}
            />
            <Screen
                name="Profile"
                component={ProfileScreen}
                options={options}
            />
        </Navigator>
    );
};

export const stylesHomeTabs = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        left: 10,
        bottom: 11,
    },
    exitIcon: {
        position: 'absolute',
        right: 16,
        bottom: 10,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginTop: 'auto',
        paddingTop: 9,
        paddingBottom: 34,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    footerBorder: {
        borderTopColor: 'rgba(0, 0, 0, 0.30)',
        borderTopWidth: 0.5,
    },
    footerButton: {
        justifyContent: 'center',
        width: 70,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FF6C00',
        alignItems: 'center',
    }
});
