import { StackNavigator } from 'react-navigation'
// import LaunchScreen from './containers/LaunchScreen'
import Login from './containers/Login'
import styles from './Styles/LoginStyles'

const PrimaryNav = StackNavigator({
  //LaunchScreen: { screen: LaunchScreen },
  Login: { screen: Login }
}, {
  headerMode:'none',
  initialRouteName: 'Login',
  heaerStyle: styles.header
})
export default PrimaryNav