import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,Button } from 'react-native'
import { Images } from '../DevTheme'
//import { StackNavigator } from 'react-navigation'
import styles from '../Styles/TodoStyles'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import TapBar from './Tapbar';


export default class Todo extends React.Component {
    
   static navigationOptions = {
    headerTitle: 'Main',
    headerStyle: { 
        backgroundColor: '#2E499A'
    },
   
    headerTintColor: 'white',
    headerRight: <Image source={Images.profile} style={styles.headerright} />

   
  };
  render() {
    const { navigate, goBack } = this.props.navigation;
    //alert(JSON.stringify(this.props.navigation.state.params.ref))
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center' }}>
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.touch}>
                <Image source={Images.London} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
                <Image source={Images.other} style={styles.image}>
                    <Text style={styles.label}>LONDON, U.K</Text>
                </Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
                <Image source={Images.other} style={styles.image}>
                    <Text style={styles.label}>BERLIN GERMANY</Text>
                </Image>
            </TouchableOpacity>
        </ScrollView>
        <TapBar state={this.props.navigation.state.params.ref}/>
      </View>
    )
  }
}