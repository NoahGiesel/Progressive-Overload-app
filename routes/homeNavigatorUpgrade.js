import { createSharedElementStackNavigator } from 'react-navigation-shared-element/build/v4';
import { createAppContainer } from "react-navigation"


import Home from "../components/home/Home"
import Measure from "../components/home/Measure"


const stackNavigator = createSharedElementStackNavigator(
  {
    Home: Home,
    Measure: Measure,
  },
  {
    initialRouteName: 'Home',
  }
);
 

const AppContainer = createAppContainer(stackNavigator);
