import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,StyleSheet } from 'react-native'
import { Images } from '../DevTheme'
import { StackNavigator } from 'react-navigation'
import styles from '../Styles/HomeStyles'
import Todo from './Todo/TodoIndex'
import TodoCity from './Todo/TodoCity'
import Tododetail from './Todo/Tododetail'
import PhraseBook from './Phrase_Book'
import TapBar from './Tapbar';

const style = StyleSheet.create({ hideText:{ display:"none" } })
class Home extends React.Component {
  
  static navigationOptions = { header: <Text style={style.hideText} ></Text> ,title: 'Back'};
  openComponents = () => {
    this.props.navigation.navigate('Home')
  }

  gotoTodo = () => {
    this.props.navigation.navigate('Todo',{ref: 'todo'})
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
          <TouchableOpacity style={styles.centered1} onPress={()=>this.props.navigation.navigate('Todo',{ref: 'todo'})}>
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
          <TouchableOpacity style={styles.centered1} onPress={()=>this.props.navigation.navigate('PhraseBook')}>
           <Text style={styles.sectionText}>PHRASE BOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>OTHERS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>OTHERS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>OTHERS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered1}>
           <Text style={styles.sectionText}>OTHERS</Text>
          </TouchableOpacity> 
        </ScrollView>
        <TapBar goto={this.gotoTodo} />
        
      </View>
    )
  }
}


export default StackNavigator({
   Home: {screen: Home},
   Todo: {screen: Todo},
   TodoCity: {screen: TodoCity},
   Tododetail: {screen: Tododetail},
   PhraseBook: {screen: PhraseBook}
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#fff'
  },
  initialRouteName: 'Home',
  headerMode: 'screen',
  // Keeping this here for future when we can make
  
  
})
