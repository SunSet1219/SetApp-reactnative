import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'transparent'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      
    },
    container: {
      flex: 1,
      flexDirection: 'column',      
      paddingTop: 10,
      backgroundColor: 'transparent'
    },
    sectionText: {
      color: '#A7A9AD',
      fontFamily: 'Cochin',
      fontSize: 18,
      fontWeight: '600'
    },  
    centered: {
      alignItems: 'center'
    },
    logo: {
        borderRadius: 30,
        width: 60,
        height: 60,
        marginTop: 25
    },
      name: {
        fontFamily: 'Cochin', 
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        marginTop: 12
      },
      viewprofile: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Farah',
        marginTop:7
      },
      centered1: {
        alignItems: 'center',
        marginTop: 30
    },
})