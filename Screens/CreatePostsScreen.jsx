import { View } from "react-native"
import { styles } from "../App"
import 'react-native-gesture-handler';
import { PostCreateCard } from "../Components/PostCreateCard";
import { useNavigation } from '@react-navigation/native';

export const CreatePostsScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <PostCreateCard navigation={navigation} />
        </View>
    )
};