import React, {useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { findNodeHandle,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
 
const {width, height} = Dimensions.get("screen");


const images = {
  Home:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  Statistics:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  Calendar:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  Sleep:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  Settings:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};
const data = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
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


  return <Animated.View style={{position:"absolute",  backgroundColor: "white", height: 4,width: indicatorWidth ,left:0, transform: [ {translateX} ] , bottom: 0 }} >

  </Animated.View>
}
 // this is tabs component used below  ( menu ) -> can be extracted into new component for better project structure

 const Tab = React.forwardRef(({item,onItemPress}, ref)  =>{
  return <TouchableOpacity onPress={onItemPress}>
    <View ref={ref} >
      <Text style={{color: "white", fontSize: 70/data.length ,paddingVertical: 21, fontWeight:"bold", textTransform: "uppercase"}}>{item.title}</Text>
    </View>
  </TouchableOpacity>
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

  return <View ref={containerRef} style={{position: "absolute", bottom :  0 ,width }}>
    <View style={{justifyContent: "space-evenly", flex: 1, flexDirection: "row",backgroundColor:"black"}}>
      {data.map((item,index) => {
        return <Tab key={item.key} item={item} ref={item.ref} onItemPress={() => onItemPress(index)}/>
      })}
    </View>
    {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX} /> }
  </View> 
}




export default function App() { 
  // beeing our app an animatedFlatlist we do have the slider, which we can track by scrollX  : https://www.youtube.com/watch?v=ZiSN9uik6OY
  //Animated.Value is not beeing changed when the component gets new props or gets rerendered
  const scrollX = React.useRef(new Animated.Value(0)).current;  
  const ref = React.useRef();
  const onItemPress = React.useCallback(itemIndex => {
    ref?.current?.scrollToOffset({
      offset:itemIndex * width
    })
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.FlatList
        data={data}
        ref={ref}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        //scrollX gent modified based on the scroll position , useNativeDriver set to false, does not work with width.
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x:scrollX}}}],
          {useNativeDriver : false}
        )}
        renderItem={({item}) =>{
          return <View style={{width, height}}>
            <Image source={{uri:item.image}} style={{flex:1, resizeMode: "cover"}}/>
          </View> 
        }}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
