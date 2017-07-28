import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../DevTheme'
import { StackNavigator } from 'react-navigation'
import styles from '../Styles/HomeStyles'

class Home extends React.Component {
  openComponents = () => {
    this.props.navigation.navigate('Home')
  }
  

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.bg} style={styles.backgroundImage} resizeMode='stretch' />
        
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.profile} style={styles.logo} />
            <Text style={styles.name}>SAUL GOODMAN</Text>            
          </View>
          <TouchableOpacity style={styles.centered}>
            <Text style={styles.viewprofile}>View  profile</Text>
          </TouchableOpacity>
           
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>ITINERARY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>MAPS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>THINGS TO DO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>MESSENGER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>STUDENT CARD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>PACKING CHECKLIST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>PHRASE BOOK</Text>
          </TouchableOpacity>
          
            
          
          
        </ScrollView>
        
      </View>
    )
  }
}

export default StackNavigator({
   Home: {screen: Home},
//   APITestingScreen: {screen: APITestingScreen},
//   ComponentExamplesScreen: {screen: ComponentExamplesScreen},
//   DeviceInfoScreen: {screen: DeviceInfoScreen},
//   PluginExamplesScreen: {screen: PluginExamplesScreen},
//   ThemeScreen: {screen: ThemeScreen},
//   FaqScreen: {screen: FaqScreen}
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'Home',
  headerMode: 'none',
  // Keeping this here for future when we can make
  navigationOptions: {
    header: {
      left: (
        <TouchableOpacity onPress={() => window.alert('pop')} ><Image  style={{marginHorizontal: 10}} /></TouchableOpacity>
      ),
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})
