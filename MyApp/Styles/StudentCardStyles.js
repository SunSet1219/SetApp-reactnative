import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    topbar: {
        backgroundColor: '#2E499A'
    } ,
    headerright: {
        width:20,
        height:20,
        marginRight: 20
    },
    contain: {
        marginHorizontal: 17,
        marginTop: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius:10,
        paddingBottom: 30,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 2

        
    },
    help: {
        color: 'rgb(32, 47, 60)',
        fontSize: 22,
        marginTop: 35,
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',
    },
    desc: {
        color: 'rgb(32, 47, 60)',
        fontSize: 16,
        marginTop: 35,
        fontWeight: '500',
        fontFamily: 'Trebuchet MS',
    },
    textlabel: {
        color: 'rgb(32, 47, 60)',
        fontSize: 16,
        marginTop: 32,
        fontWeight: '300',
        fontFamily: 'Trebuchet MS',
       
    },
   
    label: {
        color: 'rgb(32, 47, 60)',
        fontSize: 16,
        fontWeight: '300',
        fontFamily: 'Trebuchet MS',
         width: 60
    },
    textinput: {
        marginLeft: 20
    },

   
    viewInput: {
        flexDirection: 'row',
        marginTop: 35,
        borderBottomWidth: 1,
        borderBottomColor: '#d0d0d0',
        paddingBottom: 10
    },
    imagedash: {
        width:10, height:10, marginHorizontal:5
    }
})