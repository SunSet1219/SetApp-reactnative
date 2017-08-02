import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,Dimensions, TextInput } from 'react-native'
import { Images } from '../../DevTheme'
import styles from '../../Styles/StudentCardStyles'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import TapBar from '../Tapbar';


export default class StudentCard extends React.Component {
    constructor () {
        super ()
        this.state = {
            family: '',
            street: '',
            town: ''
        }
    }
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
            <View style={{backgroundColor: '#EBEBEB', flex: 1 }}>
                <ScrollView>
                    <View  style={styles.contain}>
                        <Text style={styles.help}> HELP</Text>
                        <Text style={styles.desc}> I'v lost my group...</Text>
                        <Text style={styles.textlabel}> My address in England</Text>

                    
                        <View style={styles.viewInput}>
                            <Text style={styles.label}>Family:</Text>
                            <TextInput placeholder={this.state.family === 1 ? null : 'Enter details here...'} 
                                placeholderTextColor='gray' style={styles.textinput}
                                onChangeText={(text) => this.setState({family: text})}
                                value={this.state.family} />
                        </View>

                        <View style={styles.viewInput}>
                            <Text style={styles.label}>Street:</Text>
                            <TextInput placeholder={this.state.street === 1 ? null : 'Enter details here...'} 
                                placeholderTextColor='gray' style={styles.textinput}
                                onChangeText={(text) => this.setState({street: text})}
                                value={this.state.street} />
                        </View>

                        <View style={styles.viewInput}>
                            <Text style={styles.label}>Town:</Text>
                            <TextInput placeholder={this.state.town === 1 ? null : 'Enter details here...'} 
                                placeholderTextColor='gray' style={styles.textinput}
                                onChangeText={(text) => this.setState({town: text})}
                                value={this.state.town} />
                        </View>
                        <View style={styles.viewInput}>
                            <Text style={styles.textlabeladd}> Mobile no. of leader:   +44(0) 712 345 6789</Text>
                        </View>
                        <View style={styles.viewInput}>
                            <Text style={styles.textlabeladd}> Emergency Number:   999</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:30}}>
                            <Image source={Images.studentCardDash1} style={styles.imagedash}/>
                            <Image source={Images.studentCardDash2} style={styles.imagedash}/>
                        </View>
                    </View>
                </ScrollView>

                <TapBar />
            </View>
        )
    }
}
