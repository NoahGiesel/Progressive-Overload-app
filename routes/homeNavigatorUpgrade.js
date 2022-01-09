import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../components/home/Home"
import Measure from "../components/home/Measure"




const Stack = createStackNavigator();

export default function  HomeNavigatorUpgrade  ()   {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        headerMode='none'
        initialRouteName='Home'
        screenOptions={{ headerShown: false  }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Measure" component={Measure} 
          options={()=>({
            gestureEnabled : true, 
            transitionSpec : {
              open : {animation:'timing', config : {duration: 200}},
              close : {animation:'timing', config : {duration:200}}
            }})}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [`item.${item.id}.photo`,`item.${item.key}.location` ];
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

;