import { createAppContainer, createStackNavigator } from "react-navigation";
import Login from './src/auth/login/Login'

const MainNavigator = createStackNavigator({
  login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
      headerTintColor: "#F4F3EE"
    })
  }
});

const Router = createAppContainer(MainNavigator);

export default Router;
