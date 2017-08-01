import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    search_view: {
        backgroundColor: '#2E499A',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        paddingVertical: 12
    },
    search_img: {
        width: Dimensions.get('window').width-25,
        height: 30
    },
    search_text: {
        color: 'white',
        marginLeft: 40,
        marginVertical: 5
    },
    alert_view: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    alert: {
        width: 24,
        height: 24,
        marginRight: 15
    },
    word: {
        color: 'rgb(32, 47, 60)', 
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 17,
    marginTop: 35
    },
    word_content: {
        marginTop: 17,
        marginHorizontal: 17,
        backgroundColor: 'white',
        paddingBottom: 15,
        paddingHorizontal: 15,        
        justifyContent: 'space-around',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 2

    },
    word_row: {
        flexDirection: 'row',
        marginTop: 16
    },
    word_flag: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 16
    },
    word_text: {
        color: 'rgb(32, 47, 60)',
        fontSize: 15,
        marginVertical: 3,
        width: Dimensions.get('window').width-119
    }

    
})
  