import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,Button } from 'react-native'
import { Images } from '../../DevTheme'
import styles from '../../Styles/TodoStyles'
import TapBar from '../Tapbar';


export default class TodoCity extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
        headerStyle: { 
            backgroundColor: '#2E499A'
        },
    
        headerTintColor: 'white',
        headerRight: <Image source={Images.flag} style={styles.headerright} />

    });

    render() {
        const { navigate, goBack } = this.props.navigation;

        return (
        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center' }}>
            <ScrollView style={styles.container}>
               
                <TouchableOpacity style={styles.touch}>
                    <Image source={Images.recommended} style={styles.image} >
                        <Text style={styles.label}>RECOMMENDED</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Image source={Images.landmark} style={styles.image} >
                        <Text style={styles.label}>RANDMARKS</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate('Tododetail',{ref: 'todo'})}>
                    <Image source={Images.restaurant} style={styles.image} >
                        <Text style={styles.label}>RESTAURANTS</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Image source={Images.detail_other} style={styles.image} >
                        <Text style={styles.label}>OTHERS</Text>
                    </Image>
                </TouchableOpacity>
            </ScrollView>
            <TapBar state={this.props.navigation.state.params.ref}/>
        </View>
        )
    }
}