import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    tapcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',       
        alignItems: 'center',
        bottom: 0,
        zIndex: 10,
        backgroundColor: '#212f3c',
        paddingVertical: 7,
        borderTopWidth: 1,
        borderTopColor: '#4d5a63'
    },
    icon: {
        backgroundColor: 'transparent',
        fontWeight: '800'
    }
})