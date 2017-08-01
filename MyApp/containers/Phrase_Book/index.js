import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,TextInput } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { Images } from '../../DevTheme'
import styles from '../../Styles/Phrase_book'
import TapBar from '../Tapbar';


export default class TodoCity extends React.Component {
    constructor () {
        super ()
        this.state = {
            search: ''
        }
    }
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'PHRASE BOOK',
        headerStyle: { 
            backgroundColor: '#2E499A'
        },
    
        headerTintColor: 'white',
        

    });

    render() {
        const { navigate, goBack } = this.props.navigation;

        return (
        <View style={{ backgroundColor: '#EBEBEB', flex: 1, justifyContent: 'center' }}>
            <View style={styles.search_view}>
                <Image source={Images.tap_search} style={styles.search_img}>
                    <TextInput placeholder='Tap to search'
                        placeholderTextColor='#fff' style={styles.search_text} 
                        onChangeText={(text) => this.setState({search: text})}
                        value={this.state.search} />
                </Image>
            </View>
            <ScrollView >
               <View style={styles.alert_view}>
                   <Image source={Images.alret} style={styles.alert} />
                   <Text style={{color: 'rgb(32, 47, 60)', fontSize: 15}}>Tap on words or phrases for more detail</Text>
               </View>
               <Text style={styles.word}>Words</Text>
               <View style={styles.word_content}>
                   <View style={styles.word_row}>
                       <Image source={Images.uk_flag} style={styles.word_flag}/>
                       <Text style={styles.word_text}>Potatoes</Text>
                   </View>
                   <View style={styles.word_row}>
                       <Image source={Images.flag} style={styles.word_flag} />
                       <Text style={styles.word_text}>Kartoffein</Text>
                   </View>
               </View>
               <Text style={styles.word}>Words</Text>
               <View style={styles.word_content}>
                   <View style={styles.word_row}>
                       <Image source={Images.uk_flag} style={styles.word_flag}/>
                       <Text style={styles.word_text}>Potatoes! Boil them, mash them, stick them in a stew.</Text>
                   </View>
                   <View style={styles.word_row}>
                       <Image source={Images.flag} style={styles.word_flag} />
                       <Text style={styles.word_text}>Kartoffein. Kochen sie, Purienren sie, stecken sie in einem Eintopf</Text>
                   </View>
               </View>
               <View style={styles.word_content}>
                   <View style={styles.word_row}>
                       <Image source={Images.uk_flag} style={styles.word_flag}/>
                       <Text style={styles.word_text}>Please can you boil the potatoes?</Text>
                   </View>
                   <View style={styles.word_row}>
                       <Image source={Images.flag} style={styles.word_flag} />
                       <Text style={styles.word_text}>Bitte Konnt ihr die kartoffeln kochen?</Text>
                   </View>
               </View>
            </ScrollView>
            <TapBar />
        </View>
        )
    }
}