import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Ionicons';
import DonutChart from "../custom/DonutChart"


const {width, height} = Dimensions.get("screen");


export default function Sleep() { 
  

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View>
          <Text style={styles.day}>Today, Thursday</Text>
          <Text style={styles.month}>18 January 2021 </Text>  
        </View>
        <Icon name="calendar-outline" style={styles.icon} size={28} color="#666" /> 
      </View>      
      <View style={styles.average}>
        <View> 
          <View style={styles.box}>
            <Text style={{fontSize: 21 ,alignSelf :"flex-start"}}>Average Sleep</Text>
            <Text style={{fontSize: 25, fontWeight: "bold", marginVertical: 8,alignSelf :"flex-start"}}>6.25 h</Text>
            <Text style={{fontSize: 21,alignSelf :"flex-start" }}>Last</Text>
            <Text style={{fontSize: 25, fontWeight: "bold", marginVertical: 8,alignSelf :"flex-start"}}>7.50 h</Text>
          </View> 
        </View>
        <View > 
          <View style={styles.box}>
            <Text style={{ alignSelf: "center",  fontSize: 21 }}>Goal</Text>
            <DonutChart radius={60} color = "#222" strokeWidth={10}/>
          </View> 
        </View>
      </View>

      <View style={styles.doubleBox}>  
        <Text style={{color : "#fff",fontSize: 21, paddingBottom:15 , paddingHorizontal: 25}}>Sleep information</Text>
        <View style={styles.twoCol}> 
          <View>
            <Text style={{color : "#fff",fontSize: 26 , fontWeight: "bold"}}>2h 33m</Text>
            <Text style={{color : "#f9f9f9", marginBottom: 10}} >Deep Sleep</Text>
          </View>
          <View>
              <Text style={{color : "#fff",fontSize: 26 , fontWeight: "bold"}}>42m</Text>
            <Text style={{color : "#f9f9f9", marginBottom: 10}} >Fell asleep</Text>
            </View>
        </View>
        <View style={styles.twoCol}>
          <View>
            <Text style={{color : "#fff",fontSize: 26 , fontWeight: "bold"}}>11:02 PM</Text>
            <Text style={{color : "#f9f9f9", marginBottom: 10}} >Went to bed</Text>
          </View>
            <View>
              <Text style={{color : "#fff",fontSize: 26 , fontWeight: "bold"}} >07:34</Text>
            <Text style={{color : "#f9f9f9", marginBottom: 10}} >Woke Up</Text>
            </View>
        </View>
      </View>
      <Text style={{color : "#fff", marginTop:  30}} >below will ad a list containing animated list of the past X (like 10) history tracks of sleep etc..</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor : "#fff", 
    backgroundColor: '#0B0B19',
    alignItems: 'center',
    marginTop:  Constants.statusBarHeight  
  },
  head : { 
    width: width -30, 
    marginTop: 35,
    flexDirection: "row",
    paddingVertical: 5
  },
  day : {  
    width: width -25, 
    fontSize: 30,
    alignSelf: 'center',
    color : "#fff",
  },
  month: {
    width: width -30, 
    paddingVertical: 2,
    color: "#f2f2f2",
    fontSize: 17
  },
  icon : {
    position: "absolute",
    right: 10,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor : "#1A1A38",
    borderRadius: 25
  },
  average : { 
    width: width  ,
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-evenly",
  },
  box : {
    width: width / 2.25 ,
    alignItems : "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#088B85",
    borderRadius: 15
  },
  doubleBox:  { 
    width : width -30,
    backgroundColor: "#088B85",
    borderRadius: 15 ,
    marginVertical : 30, 
    paddingVertical: 20,
  },
  twoCol : {
    width: width -30 ,
    marginVertical : 3, 
    flexDirection: "row",
    justifyContent: "space-evenly", 
  }
});
