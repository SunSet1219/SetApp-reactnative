import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
   
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
     alignItems: 'center',
     resizeMode: 'cover',
     width: null,
     height: null
   
  },
  email: {
      
      fontSize:20,
      height:50,
      width:250 ,
      //marginHorizontal:30,
      color:'#fff',
      marginBottom:40, 
      borderBottomWidth: 1,
      borderBottomColor:'#fff'
    },
 pass: {
     fontSize: 20,
     height: 50,
     width: 250 ,
     //marginHorizontal: 30,
     color: '#fff',
     marginBottom: 40,
     borderBottomWidth: 1,
    borderBottomColor:'#fff'
 },
email1: {
      
      fontSize:20,
      height:50,
      width:250 ,
      //marginHorizontal:30,
      color:'#fff',
      marginBottom:40, 
      borderBottomWidth: 1,
      borderBottomColor:'#2ea2d8'
    },
 pass1: {
     fontSize: 20,
     height: 50,
     width: 250 ,
     //marginHorizontal: 30,
     color: '#fff',
     marginBottom: 40,
     borderBottomWidth: 1,
    borderBottomColor:'#2ea2d8'
 },
button: {
    marginTop: 15,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    width: 250,
    
    
},
text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: 'white',
    width: 250
    
}
  
})