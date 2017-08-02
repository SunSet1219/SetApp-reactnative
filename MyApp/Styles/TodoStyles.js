import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  
    
    topbar: {
        backgroundColor: '#2E499A'
    } ,
    headerright: {
        width:20,
        height:20,
        borderRadius:10,
        marginRight: 16
    },
    image: {
        width: 380,
        height: 150,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    container: {
         paddingTop: 10
        
    },
    touch: {
        alignItems: 'center',
        paddingTop: 20

        
    },
    label:{
        fontFamily: 'Trebuchet MS',
        color: 'white',
        fontSize: 25,
        fontWeight: '900',
        backgroundColor: 'transparent' 
    },
    
    res_detail: {
        width: Dimensions.get('window').width,
        height: 200
    },
    map_img: {
        width: 14,
        height: 22,
        marginRight: 20
    },
    res_title: {
        fontFamily: 'Trebuchet MS',
        marginTop: 22,
        fontSize: 20,
        color: 'rgb(32, 47, 60)',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    res_scribe: {
        
        marginTop: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    res_content: {
        fontFamily: 'Trebuchet MS',
        fontSize: 16,
        marginTop: 22,
        marginHorizontal: 35,
        alignSelf: 'center',
        color: 'rgb(32, 47, 60)'
    }
    
})
