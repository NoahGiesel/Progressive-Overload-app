import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
 
const {width, height} = Dimensions.get("screen");
 
const s = width * 0.68;
const tryToSee = { 
  ITEM_WIDTH : s,
  ITEM_HEIGHT: s *1.5,
  RADIUS: 18,
  SPACING : 12,
  FULL_SIZE: s + 12 * 2
}

const data = [ 
  {
    key: "1",
    location: "Italy",
    numberOfDays: 9,
    image :"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80",
    color: "#D3BCC0"
  },
  {
    key: "2",
    location: "France",
    numberOfDays: 21,
    image :"https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    color: "#FAF3DD"
  },
  {
    key: "3",
    location: "Florida",
    numberOfDays: 2,
    image :"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    color: "#8DA7BE"
  },
  {
    key: "4",
    location: "Germany",
    numberOfDays: 7,
    image :"https://images.unsplash.com/photo-1534313314376-a72289b6181e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    color: "#95BF74"
  },
  {
    key: "5",
    location: "Spain",
    numberOfDays: 55,
    image :"https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    color: "#AF8D86"
  },
  {
    key: "6",
    location: "Great Britain",
    numberOfDays: 47,
    image :"https://images.unsplash.com/photo-1526659666037-96f63c2ec0ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    color: "#2660A4"
  },
  {
    key: "7",
    location: "Russia",
    numberOfDays: 81,
    image :"https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
    color: "#F19953"
  },
  {
    key: "8",
    location: "Marocco",
    numberOfDays: 13,
    image :"https://images.unsplash.com/photo-1575193732883-6fd4bdc71014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    color: "#C47335"
  },
  {
    key: "9",
    location: "Portugal",
    numberOfDays: 768,
    image :"https://images.unsplash.com/photo-1529699074188-d1fb8244c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    color: "#E8D6CB"
  },
  {
    key: "10",
    location: "America",
    numberOfDays: 44,
    image :"https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    color: "#FFE5D9"
  },

]
 
export default function Home() { 
  

  return (
    <View style={styles.container}>
        <Text style={styles.title}>New Exercise </Text>
        <FlatList 
          style={{flexDirection: "row", width: width}}
          data={data}
          keyExtractor={(item,index) => item.key}
          horizontal 
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={tryToSee.FULL_SIZE}
          renderItem={({item}) =>{
            return (
              <TouchableOpacity 
              onPress={() => {}}
              style={styles.itemContainer}
              >
                <Image 
                  source={{uri: item.image}} 
                  style={[StyleSheet.absoluteFillObject, { resizeMode: "cover"}]}
                />

              </TouchableOpacity>)
          }}
          />
        <Text style={styles.title}>History exercises</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#131313',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  title: { 
    color : "#fff",
    fontSize: 20
  },
  itemContainer: {
    width: tryToSee.ITEM_WIDTH,
    height: tryToSee.ITEM_HEIGHT,
    margin: tryToSee.SPACING, 
  }
});
