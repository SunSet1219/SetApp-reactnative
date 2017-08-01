import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,Button } from 'react-native'
import { Images } from '../../DevTheme'
import styles from '../../Styles/StudentCardStyles'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import TapBar from '../Tapbar';


export default class StudentCard extends React.Component {
    static navigationOptions = {
        headerTitle: 'Student Card',
        headerStyle: { 
            backgroundColor: '#2E499A'
        },
    
        headerTintColor: 'white',
        headerRight: <Image source={Images.Pen} style={styles.headerright} />

    };    

    render (){
        return (
            <View style={{backgroundColor: '#ebebeb'}}>
                <View style={styles.contain}>
                    <Text style={styles.help}> HELP</Text>
                    <Text style={styles.desc}> I'v lost my group...</Text>
                    <Text style={styles.text}> My address in England</Text>



                </View>
            </View>
        )
    }
}
