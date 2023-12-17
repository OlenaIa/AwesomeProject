import { View, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen } from '../Screens/PostsScreen';
import { CreatePostsScreen } from '../Screens/CreatePostsScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'; 

const Tabs = createBottomTabNavigator();
const { Navigator, Screen } = Tabs;

const options = {
    headerShown: false,
    tabBarShowLabel: false,
    // tabBarActiveTintColor: 'white',
    // tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
    // tabBarActiveBackgroundColor: '#FF6C00',
    // tabBarInactiveBackgroundColor: 'white',
};

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={[stylesHomeTabs.footer, stylesHomeTabs.footerBorder]}>
            {state.routes.map((route, index) => {
                //   const { options } = descriptors[route.key];

                const isFocused = state.index === index;

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
                        {route.name === 'PostsScreen' && <AntDesign name="appstore-o" size={24} color="rgba(33, 33, 33, 0.8)" />}
                        {route.name === 'CreatePosts' && <View style={stylesHomeTabs.footerButton}>
                            <Ionicons name="add" size={24} color="white" />
                        </View>}
                        {route.name === 'Profile' && <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />}
                    </Pressable>
                );
            })}
        </View>
    );
};

export function HomeTabsBar() {
    return (
        <Navigator
            initialRouteName="PostsScreen"
            tabBar={props => <MyTabBar {...props} />}
        >
            <Screen
                name="PostsScreen"
                component={PostsScreen}
                options={options}
            />
            <Screen
                name="CreatePosts"
                component={CreatePostsScreen}
                options={options}
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
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 39,
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
