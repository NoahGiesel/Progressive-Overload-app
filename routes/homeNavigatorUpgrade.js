import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../components/home/Home"
import Measure from "../components/home/Measure"
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


import Icon from 'react-native-vector-icons/Ionicons';


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
            gestureEnabled : false,
            header: ({ goBack }) => ({
              left: (<Icon name="arrow-back-outline" 
              onPress={ () => { goBack() } }  
              size={21} 
              color="#000" 
          />)
          }),
            transitionSpec : {
              open : {animation:'timing', config : {duration:200}},
              close : {animation:'timing', config : {duration:200}}
            }})}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [`item.${item.id}.photo` ];
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

;