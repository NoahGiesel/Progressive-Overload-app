import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from "../components/settings/Settings"
import Privacy from "../components/settings/route/Privacy"




const Stack = createStackNavigator();

export default function  SettingsNavigator  ()   {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        headerMode='none'
        initialRouteName='Settings'
        screenOptions={{ headerShown: false  }}>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Privacy" component={Privacy} 
          options={()=>({
            gestureEnabled : true, 
            transitionSpec : {
              open : {animation:'timing', config : {duration: 200}},
              close : {animation:'timing', config : {duration:200}}
            }})}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [ ];
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

;