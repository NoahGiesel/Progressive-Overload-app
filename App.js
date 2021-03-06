import React, {useState, useEffect, useCallback ,useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,findNodeHandle,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
//import Constants from 'expo-constants'
// inside css  marginTop:  Constants.statusBarHeight 
 
import Home from "./components/home/Home"
import HomeNavigatorUpgrade from "./routes/HomeNavigatorUpgrade"
import Statistics from "./components/statistics/Statistics"
import Calendar from "./components/calendar/Calendar"
import Sleep from "./components/sleep/Sleep"
import Settings from "./components/settings/Settings"
import SettingsNavigator from "./routes/SettingsNavigator"
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyle } from './styles/global';


const {width, height} = Dimensions.get("screen");
 
//i have to store components inside objects in order to access them from renderItem 
 
const DATA = [
  {
    id: 'comp1',
    icon: <Icon name="apps-outline"   size={25} color="#fff" />,
    description: 'Home',
  },
  {
    id: 'comp2',
    icon: <Icon name="analytics-outline"   size={25} color="#fff" />,
    description: 'Statistics',
  },
 // {
   // id: 'comp3',
    //icon: <Icon name="calendar-outline"  size={25} color="#fff" /> ,
    //description: 'Calendar',
  //},
  {
    id: 'comp4',
    icon: <Icon name="moon-outline"   size={25} color="#fff" />,
    description: 'Sleep',
  },
  {
    id: 'comp5',
    icon:  <Icon name="settings-outline"   size={25} color="#fff" />,
    description: 'Settings',
  }
];

const data  = DATA.map((i) => ({
  key : i.id,
  title: i.description,
  icon : '',
  ref: React.createRef()
}));

 
//Indicator component used inside TABS component below

const Indicator = ({measures, scrollX}) => { 
  const inputRange = data.map((_,i) => i * width) 
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange : measures.map((measure) => measure.width),
  }) 
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange : measures.map((measure) => measure.x),
  }) 
  return (
    <Animated.View style={{position:"absolute",  backgroundColor: "white", height: 4,width: indicatorWidth ,left:0, transform: [ {translateX} ] , bottom: 0 }} ></Animated.View>
  )
} 

 //This is tabs component used below  ( menu ) -> can be extracted into new component for better project structure

 const Tab = React.forwardRef(({item,onItemPress}, ref)  =>{
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref} >
 
        <Text style={{color: "white", fontSize: 70/data.length ,paddingVertical: 21, fontWeight:"bold", textTransform: "uppercase"}}>
          {item.icon}
          {item.title}
        </Text>
      </View> 
    </TouchableOpacity>
  )
})
 
const Tabs = ({data, scrollX , onItemPress}) => {
  const [measures, setMeasures] = React.useState([])
  const containerRef = React.useRef() 
  React.useEffect(() => {
    let m = []
    data.forEach(item => {
      item.ref.current.measureLayout(containerRef.current, (x,y, width ,height) => {
        m.push({
          x,y,width,height
        })
        if(m.length == data.length){
          setMeasures(m);
        }
      })
    })
  }, [])   
  return (
    <View ref={containerRef} style={{position: "absolute", bottom :  0 ,width }}>
      <View style={{justifyContent: "space-evenly", flex: 1, flexDirection: "row",backgroundColor:"black"}}>
        {data.map((item,index) => { 
          return <Tab key={item.key} item={item} ref={item.ref} onItemPress={() => onItemPress(index)}/>
        })}
      </View>
      {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX} /> }
    </View> 
  )
}

// HERE I WILL INSERT ALL COMPONENTS (PAGES) I'M USING
const mapOfComponents = {
  comp1: <HomeNavigatorUpgrade  />,
    // setFlatMove={x => {
    // console.log(x)
    //if(x === 1) setListScroll(false)
    //if(x === 0) setListScroll(true)
  // }} 
  comp2: <Statistics />,
  // comp3: <Calendar />,
  comp4: <Sleep />,
  //comp5: <Settings />
  comp5: <SettingsNavigator /> 
};
 
 

export default function App( ) {  

  const [ listScroll , setListScroll] = useState(false) 
   
 
  // beeing our app an animatedFlatlist we do have the slider, which we can track by scrollX  : https://www.youtube.com/watch?v=ZiSN9uik6OY
  //Animated.Value is not beeing changed when the component gets new props or gets rerendered
  const scrollX = React.useRef(new Animated.Value(0)).current;   
  const ref = React.useRef();
  //itemIndex gives me the item on which we are 
  const onItemPress = React.useCallback(itemIndex => {
      ref?.current?.scrollToOffset({
      offset:itemIndex * width
    })
    //console.log(itemIndex)
  }) 
 


  return ( 
    <SafeAreaView style={styles.container}> 
      <StatusBar style="auto" />
      <Animated.FlatList
        scrollEnabled={false}
        data={DATA}
        ref={ref}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false} 
        decelerationRate={0.9}
        //scrollX gets modified based on the scroll position , useNativeDriver set to false, does not work with width.
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x:scrollX}}}],
          {useNativeDriver : false}
        )}
        renderItem={({item}) =>{
          return (
            <View style={{width, height}}>
              {mapOfComponents[item.id] }
            </View>
          )
        }} 
        />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress}/>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
