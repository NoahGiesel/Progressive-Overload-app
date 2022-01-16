import React, {useState, useEffect, useCallback } from 'react';
import { TouchableWithoutFeedback  ,StatusBar ,StyleSheet,ScrollView, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
const {width, height} = Dimensions.get("screen");
import Icon from 'react-native-vector-icons/Ionicons';

import { SharedElement } from 'react-navigation-shared-element';


//font-family: 'Permanent Marker',

const s = width * 0.68;
const tryToSee = { 
  ITEM_WIDTH : s,
  ITEM_HEIGHT: s *1.5,
  RADIUS: 18,
  SPACING : 12,
  FULL_SIZE: s + 12 * 2
}

const bodyGroups = ["ALL","SHOULDER","ARM","CHEST", "ABS", "LEG","BACK", "CUSTOM"];
const data = [ 
  {
    key: "1",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#D3BCC0",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80",
  },
  {
    key: "2",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#FAF3DD",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "3",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#8DA7BE",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "4",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#95BF74",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1534313314376-a72289b6181e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "5",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#AF8D86",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  },
  {
    key: "6",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#2660A4",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1526659666037-96f63c2ec0ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
  {
    key: "7",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#F19953",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
  },
  {
    key: "8",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#C47335",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1575193732883-6fd4bdc71014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    key: "9",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#E8D6CB",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1529699074188-d1fb8244c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    key: "10",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#FFE5D9",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "11",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#FFE5D9",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "12",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#FFE5D9",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "13",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#FFE5D9",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "14",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#FFE5D9",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "15",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#FFE5D9",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "16",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#FFE5D9",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    key: "17",
    name: "Biceps curl",
    type: "Dumbbell",
    date: ["01-06-2021"],
    repetition: 9,
    color: "#FFE5D9",
    set: 2,
    rep: 10,
    weight: 20,
    // image :"https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

]





function RenderFilter(props) {
  return (
    <Animated.ScrollView 
        horizontal
        decelerationRate="normal"
        showsHorizontalScrollIndicator={false} 
      > 
        {
          bodyGroups.map((item, index) => { 
            return(
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>  props.filterSelect(item) }
                key={index}
              >
                <View style={styles.bodyGroup}>
                  <Text style={[ ( props.activeFilter=== item) ? {backgroundColor: "#FFA91B", borderColor: "#FFA91B"} : {backgroundColor: "#fff", borderColor: "#fff"} ,{ borderWidth: 1 ,fontSize: 16, fontWeight: "bold",borderRadius: 10 ,marginHorizontal: 10, color: "#555", paddingVertical: 13, paddingHorizontal: 22,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.3,shadowRadius: 4,elevation: 5}]}>
                    {item}
                  </Text> 
                </View> 
              </TouchableOpacity>
            )  
        })
        }
      </Animated.ScrollView>  
  )
}



export default function Home( { navigation }  ) { 
  const [activeFilter , setActiveFilter] = useState("ALL");
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const filterSelect = (item) => {
    setActiveFilter(i => i = item);
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}> Workouts</Text>    
          <View>  
           <RenderFilter activeFilter={activeFilter} filterSelect={(item) => filterSelect(item)} /> 

            <Animated.ScrollView 
                horizontal
                scrollEventThrottle={0}
                decelerationRate="normal"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}  
                onScroll={Animated.event(
                  [{ nativeEvent : { contentOffset : { x :scrollX }}}],
                  { useNativeDriver: true }
                )}
              > 
              {/* <View style={ { justifyContent: "center"} } >
                <Icon name="add-outline"  
                    style={styles.add} 
                    size={80} 
                    color="#fff" 
                />
              </View> */}
                {
                  data.map((item, index) => {
                    const inputRange = [(index - 1) * tryToSee.FULL_SIZE, index * tryToSee.FULL_SIZE, (index + 1) * tryToSee.FULL_SIZE]
                    const translateX = scrollX.interpolate({
                      inputRange,
                      outputRange : [ tryToSee.ITEM_WIDTH, 0 , -tryToSee.ITEM_WIDTH]
                    });
                    const scale = scrollX.interpolate({
                      inputRange,
                      outputRange: [1,1.15,1]
                    })
                    return(
                      <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={() => { console.log("asd"),navigation.push("Measure", { item })}}
                        style={styles.itemContainer}
                        key={item.key}
                        >
                          <SharedElement id={`item.${item.id}.photo`} style={[StyleSheet.absoluteFillObject]}> 
                            <View style={[StyleSheet.absoluteFillObject, { paddingHorizontal: 11 , backgroundColor:`${item.color}` ,overflow: 'hidden', borderRadius: tryToSee.RADIUS}]}>
                              {/* <Animated.Image 
                                source={{uri: item.image}} 
                                // style={[StyleSheet.absoluteFillObject, { resizeMode: "cover", transform : [{scale}]}]}
                                style={[{ height: 100 ,resizeMode: "cover", transform : [{scale}]}]}
                              /> */}
                              <Icon name="barbell-outline"  
                                style={{alignSelf: "center",marginTop: 10}} 
                                size={100} 
                                color="#333" 
                              />
                              <View style={{ paddingHorizontal: 15, alignSelf:"center"}}>
                                <Text style={{color : "#233", marginVertical: 3, marginBottom: 15 ,  paddingTop: 5, fontSize: 28}}>{ item.name }</Text>
                                <Text style={{color : "#333", fontSize: 18}}>Last : 3x12, 19kg</Text>
                                <Text style={{color : "#333", fontSize: 18}}>Last : 3x12, 19kg</Text>
                                <Text style={{color : "#333", fontSize: 15}}>last time: { item.date[0] }</Text>
                              </View>
                            </View> 
                          </SharedElement> 
                          <SharedElement id={`item.${item.key}.location`} >
                            <Animated.Text style={[styles.location,{transform:[{translateX}]}]}>{item.location}</Animated.Text>
                          </SharedElement> 
                            {/* <View style={styles.days}> 
                              <Text style={styles.daysValue}>{item.numberOfDays}</Text>
                              <Text style={styles.daysLabel}>days</Text>
                            </View>  */}
                      </TouchableOpacity>
                    )  
                  })
                }
              </Animated.ScrollView>
              <Text style={styles.title}>Your History</Text>
              {/* <Animated.FlatList 
                data={data}
                onScroll={Animated.event(
                  [{ nativeEvent : { contentOffset : {y : scrollY}}}],
                  { useNativeDriver: true }
                )}
                keyExtractor={ item => item.key }
                contentContainerStyle={{
                  padding: 10 ,
                  paddingBottom:500
                }}
                renderItem={({item, index}) => { 
                  const inputRange = [
                    -1, 
                    0,
                    100*index, // where to start the animation 
                    100*(index + 10 ) // when the animation will end, (when next item starts animation)
                  ]
                  const opacityInputRange = [
                    -1, 
                    0,
                    100*index, // where to start the animation 
                    100*(index +1) // when the animation will end, (when next item starts animation)
                  ]
                  const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1,1,1,0]
                  })
                  const opacity = scrollY.interpolate({
                    inputRange: opacityInputRange,
                    outputRange: [1,1,1,0]
                  })
                  return <Animated.View style={{height: 100,opacity ,transform: [{scale}] ,flexDirection: 'row', paddingHorizontal: 15 ,paddingVertical: 15,marginVertical : 15, borderRadius: 10 , backgroundColor: "#999", shadowColor: '#000', shadowOffset :{width: 0, height: 10},shadowOpacity: .5 ,shadowRadius: 20}}>
                    <Icon name="barbell-outline" size={60} color="#fff" />
                    <View  style={{flexDirection: 'row', alignSelf: 'center'}}>
                      <Text style={{fontSize: 22, marginHorizontal: 10 }} >Rep: {item.rep}</Text>
                      <Text  style={{fontSize: 22, marginHorizontal: 10 }} >Set: {item.set}</Text>
                      <Text  style={{fontSize: 22, marginHorizontal: 10 }} >KG: {item.weight}</Text>
                    </View>
                  </Animated.View>
                }}  
              /> */}
          </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#222',
    // backgroundColor: '#262C40',
    marginTop: 0,
    paddingHorizontal: 10,
    marginTop:StatusBar.currentHeight
  },
  add : {
    backgroundColor: "#D3D3D3",
    marginHorizontal: 10,
    borderRadius: 20,
  },
  bodyGroup: {
    marginVertical: 20,
    alignItems: "center",
  },
  title: { 
    color : "#eee",
    fontSize: 35,
    marginTop: 20,
    marginVertical: 10
  },
  itemContainer: {
    width: tryToSee.ITEM_WIDTH - 40 ,
    height: 300,
    margin: tryToSee.SPACING, 
    overflow: "hidden",
    
  },
  location : {
    fontSize: 30,
    color : 'white',
    fontWeight: 'bold',
    width:  tryToSee.ITEM_WIDTH * 0.8,
    textTransform : 'uppercase',
    position: 'absolute',
    top: tryToSee.SPACING,
    left: tryToSee.SPACING,
  }, 
  days : {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'tomato',
    justifyContent : 'center',
    alignItems : 'center',
    bottom: tryToSee.SPACING,
    left: tryToSee.SPACING,
    position: 'absolute',
  },
  daysValue : {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20
  },
  daysLabel : {
    fontWeight: 'bold',
    
    color: '#fff',
    fontSize: 12
  },
});
