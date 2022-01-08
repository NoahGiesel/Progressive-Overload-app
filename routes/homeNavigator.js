import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"


import Home from "../components/home/Home"
import Measure from "../components/home/Measure"


//inside screen we pass all the home lines that can go to another screen, and back.
//which ever is set at the top (now it's settings), will be rendered as default as first element to see . 
const screens = {
    Home : {
        screen: Home,
        navigationOptions : {
            title : ""  
        }
    },
    Measure: {
        screen: Measure
    },
} 

//Crating a new stack navigator 
//parentesis gets a object containing all the screens were the route can go
//defaultNavigationOptions are shared options that can be overwritten individually 
const HomeNavigator = createStackNavigator(screens, {
    defaultNavigationOptions : { 
        headerStyle: {
            backgroundColor : "#fff",
            height : 60 
        } 
    }
}) ; 

//createAppContainer return a component ( that is a stack from above ), which we can render 
export default createAppContainer(HomeNavigator);