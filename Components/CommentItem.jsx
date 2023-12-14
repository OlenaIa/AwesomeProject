import { View, Text, StyleSheet } from "react-native"

export const CommentItem = () => {
    return (
        <View style={stylesCommentItem.wrapComments}>
            <View style={stylesCommentItem.commentItem}>
                <View style={stylesCommentItem.avatar}>
                    {/* <Image source={post} /> */}
                </View>
                <View style={stylesCommentItem.commentTextWrap}>
                    <Text style={stylesCommentItem.text}>Comment</Text>
                    <Text style={stylesCommentItem.date}>Date</Text>
                </View>
            </View>
        </View>
    )
};

const stylesCommentItem = StyleSheet.create({
    wrapComments: {
        gap: 24,
    },
    commentItem: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'flex-start'
    },
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 28,
        height: 28,
        flexShrink: 0,
        // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
        borderRadius: 28,
        backgroundColor: 'red',
    },
    commentTextWrap: {
        width: 299,
        padding: 16,
        gap: 8,
        borderBottomRightRadius: 6,
        borderTomRightRadius: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    text: {
        fontSize: 13,
        lineHeight: 18,
    },
    date: {
        color: '#BDBDBD',
        textAlign: 'right',
        fontSize: 10,
    },
});