// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation"


// import Settings from "../components/settings/Settings"
// import AboutUs from "../components/settings/route/AboutUs"
// import Goals from "../components/settings/route/Goals"
// import Privacy from "../components/settings/route/Privacy"


// //inside screen we pass all the setting lines that can go to another screen, and back.
// // which ever is set at the top (now it's settings), will be rendered as default as first element to see . 
// const screens = {
//     Settings : {
//         screen: Settings,
//         navigationOptions : {
//             title : ""  
//         }
//     },
//     AboutUs: {
//         screen: AboutUs
//     },
//     Goals: {
//         screen: Goals
//     },
//     Privacy: {
//         screen: Privacy
//     }, 
// } 

// //Crating a new stack navigator 
// //parentesis gets a object containing all the screens were the route can go
// //defaultNavigationOptions are shared options that can be overwritten individually 
// const SettingsNavigator = createStackNavigator(screens, {
//     defaultNavigationOptions : { 
//         headerStyle: {
//             backgroundColor : "#fff",
//             height : 50 
//         } 
//     }
// }) ; 

// //createAppContainer return a component ( that is a stack from above ), which we can render 
// export default createAppContainer(SettingsNavigator);