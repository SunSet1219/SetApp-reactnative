import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,Button } from 'react-native'
import { Images } from '../../DevTheme'
//import { StackNavigator } from 'react-navigation'
import styles from '../../Styles/TodoStyles'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import TapBar from '../Tapbar';



export default class TodoIndex extends React.Component {
    
   static navigationOptions = {
        headerTitle: 'THINGS TO DO',
        headerStyle: { 
            backgroundColor: '#2E499A'
        },
    
        headerTintColor: 'white',
        headerRight: <Image source={Images.flag} style={styles.headerright} />

    };
    // openComponents = () => {
    //     this.props.navigation.navigate('TodoIndex')
    // }
    render() {
        const { navigate, goBack } = this.props.navigation;

        return (
        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center' }}>
            <ScrollView style={styles.container}>
                
                <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate('TodoCity',{title: 'LONDON, U.K'})}>
                    <Image source={Images.London} style={styles.image} >
                        <Text style={styles.label}>LONDON, U.K</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate('TodoCity',{title: 'BERLIN GERMANY'})}>
                    <Image source={Images.Berlin} style={styles.image} >
                        <Text style={styles.label}>BERLIN GERMANY</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate('TodoCity',{title: 'MUNICH GERMANY'})}>
                    <Image source={Images.Munich} style={styles.image} >
                        <Text style={styles.label}>MUNICH GERMANY</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate('TodoCity',{title: 'OTHERS'})}>
                    <Image source={Images.other} style={styles.image} >
                        <Text style={styles.label}>OTHERS</Text>
                    </Image>
                </TouchableOpacity>
            </ScrollView>
            <TapBar/>
        </View>
        )
    }
}
