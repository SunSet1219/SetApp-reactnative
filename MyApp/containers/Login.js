import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Modal
} from 'react-native'
import styles from '../Styles/LoginStyles'
import { Images } from '../DevTheme';
import {Button} from 'react-native-elements';  
import KeyboardSpacer from 'react-native-keyboard-spacer'; 
import Home from './Home'      

export default class Login extends Component {
    constructor(){
        super()     
        this.state = {
            email: "",
            password: "",        
            state:false,
            emailapear: 0,
            passapear: 0,
            showModal: false    
        };
   
    }
    focusUser = () => {
        this.setState({emailapear: 1})
    }
    focusPass = () => {
        this.setState({passapear: 1})
    }
    userText () {
        return (
            <Text style={styles.text}>
                Username
            </Text>
        )
    }
    passText () {
        return (
            <Text style={styles.text}>
                Password
            </Text>
        )
    }
    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }
    render () {
        return (
            <Image source={Images.bg} style={styles.container}> 
                
                    {this.state.emailapear === 1 ? this.userText() : null}             
                    <TextInput placeholder={this.state.emailapear === 1 ? null : 'Username'} 
                        placeholderTextColor='#fff' style={this.state.emailapear === 1 ? styles.email1 : styles.email} 
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email} onFocus={this.focusUser}/>
                    {this.state.passapear === 1 ? this.passText() : null}
                    <TextInput placeholder={this.state.passapear === 1 ? null : 'Password'}
                        placeholderTextColor='#fff' style={this.state.passapear === 1 ? styles.pass1 : styles.pass} 
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}   secureTextEntry={true} onFocus={this.focusPass}/>
                    <Button
                        buttonStyle={styles.button}            
                        title='SIGN IN' 
                        fontWeight='700'
                        onPress={this.toggleModal}
                        />
                    <KeyboardSpacer />
                    <Modal
                        visible={this.state.showModal}
                        onRequestClose={this.toggleModal}>
                        <Home  />
                    </Modal>
            </Image>
        );
    }
}