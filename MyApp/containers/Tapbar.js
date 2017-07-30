import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from '../Styles/TapbarStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Foundation'

export default class TapBar extends React.Component {
    render () {
        return (
            <View style={styles.tapcontainer}>
                
                <Icon2 name='clipboard-notes' size={30} color='white' style={styles.icon}/>
                <Icon1 name='ios-pin-outline' size={30} color='white' style={styles.icon}/>
                <TouchableOpacity onPress={this.props.goto}>
                    <Icon name='map-o' size={25} color={this.props.state === 'todo' ? 'yellow' : 'white'} style={styles.icon} />
                </TouchableOpacity>
                <Icon name='commenting-o' size={25} color='white' style={styles.icon}/>
                <Icon1 name='ios-more-outline' size={30} color='white' style={styles.icon}/>
            </View>
        );
    }
}