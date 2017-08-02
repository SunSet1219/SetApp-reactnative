import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,Button } from 'react-native'
import { Images } from '../../DevTheme'
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
    render() {
        const { navigate, goBack } = this.props.navigation;

        return (
        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center' }}>
            <ScrollView style={styles.container}>
                
                <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate('TodoCity',{title: 'LONDON, U.K',ref: 'todo'})}>
                    <Image source={Images.london} style={styles.image} >
                        <Text style={styles.label}>LONDON, U.K</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate('TodoCity',{title: 'BERLIN GERMANY',ref: 'todo'})}>
                    <Image source={Images.berlin} style={styles.image} >
                        <Text style={styles.label}>BERLIN GERMANY</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate('TodoCity',{title: 'MUNICH GERMANY',ref: 'todo'})}>
                    <Image source={Images.munich} style={styles.image} >
                        <Text style={styles.label}>MUNICH GERMANY</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate('TodoCity',{title: 'OTHERS',ref: 'todo'})}>
                    <Image source={Images.other} style={styles.image} >
                        <Text style={styles.label}>OTHERS</Text>
                    </Image>
                </TouchableOpacity>
            </ScrollView>
            <TapBar state={this.props.navigation.state.params.ref}/>
        </View>
        )
    }
}
