import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,Button } from 'react-native'
import { Images } from '../../DevTheme'
import styles from '../../Styles/TodoStyles'
import TapBar from '../Tapbar';


export default class Tododetail extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'RESTAURANTS',
        headerStyle: { 
            backgroundColor: '#2E499A'
        },
    
        headerTintColor: 'white',
        headerRight: <View style={{flexDirection: 'row'}}>
                        <Image source={Images.map_img} style={styles.map_img} />
                        <Image source={Images.flag} style={styles.headerright} />
                    </View>

    });

    render() {
        const { navigate, goBack } = this.props.navigation;

        return (
        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center' }}>
            <ScrollView style={styles.detail_container}>
               <Image source={Images.res_detail} style={styles.res_detail}/>
                <Text style={styles.res_title}>Zima Russian Street Food & Bar</Text>
                <View style={styles.res_scribe}>
                    <Image source={Images.vector_flag} style={{width: 20, height: 22,marginRight: 15}}/>
                    <Text style={{fontSize: 16, fontWeight: '500', color: 'rgb(32, 47, 60)'}}>45 Frith St, Soho, London W1D 4SD</Text>
                </View>
                <Text style={styles.res_content}>A modern take on Russian street food with a vast vodka lineup, served up in a homey basement.
                    A modern take on Russian street food with a vast vodka lineup, served up in a homey basement.</Text>
                <Text style={styles.res_content}>A modern take on Russian street food with a vast vodka lineup, served up in a homey basement.
                    A modern take on Russian street food with a vast vodka lineup, served up in a homey basement.</Text>
                <Text style={styles.res_content}>A modern take on Russian street food with a vast vodka lineup, served up in a homey basement.
                    A modern take on Russian street food with a vast vodka lineup, served up in a homey basement.</Text>
            </ScrollView>
            <TapBar state={this.props.navigation.state.params.ref}/>
        </View>
        )
    }
}