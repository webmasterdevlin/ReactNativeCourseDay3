import { createAppContainer, createStackNavigator } from "react-navigation";
import Login from './src/auth/login/Login'
import Shuffle from './src/card/Shuffle'

const MainNavigator = createStackNavigator({
  login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
      headerTintColor: "#F4F3EE"
    })
  },
  shuffle: {
    screen: Shuffle,
    navigationOptions: () => ({
      title: "Shuffle",
      headerLeft: null,
      headerTintColor: "#F4F3EE",
      headerStyle: {
        backgroundColor: "indigo"
      }
    })
  }
});

const Router = createAppContainer(MainNavigator);

export default Router;
