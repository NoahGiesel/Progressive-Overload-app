import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle,StyleSheet,ScrollView, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Ionicons';
import DonutChart from "../custom/DonutChart" 
import { LineChart  } from "react-native-chart-kit";

const {width, height} = Dimensions.get("screen"); 
const screenWidth = Dimensions.get("window").width;


const chartConfig = {
   
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  decimalPlaces:1, // optional, defaults to 2dp
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,propsForDots: {
    r: "4",
    strokeWidth: "2",
    stroke: "#fff"
  },
  useShadowColorFromDataset: true// optional
};
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "August" ],
  datasets: [
    {
      data: [20, 1 , 28, 80,99, 43, 32,60 ],
      color: (opacity = 1) => `rgba(8, 255, 255, ${opacity})`, // optional
      strokeWidth: 4 // optional
    }
  ], 
};


export default function Sleep() { 


 
  

  return (
    <ScrollView>  
      <View style={styles.container}>
        <View style={styles.head}>
          <View>
            <Text style={styles.day}>Today, Thursday</Text>
            <Text style={styles.month}>18 January 2021 </Text>  
          </View>
          <Icon name="information-circle-outline" style={styles.icon} size={33} color="#fff" /> 
        </View>      
        <View style={styles.average}>
          <View> 
            <View style={styles.box}>
              <Text style={{fontSize: 21 ,alignSelf :"flex-start", color : "#fff"}}>Average Sleep</Text>
              <Text style={{fontSize: 25, fontWeight: "bold", marginVertical: 8,alignSelf :"flex-start", color : "#fff"}}>6.25 h</Text>
              <Text style={{fontSize: 21,alignSelf :"flex-start", color : "#fff" }}>Last</Text>
              <Text style={{fontSize: 25, fontWeight: "bold", marginVertical: 8,alignSelf :"flex-start", color : "#fff"}}>7.50 h</Text>
            </View> 
          </View>
          <View > 
            <View style={styles.box}>
              <Text style={{ alignSelf: "center",  fontSize: 21, color : "#fff" }}>Goal</Text>
              <DonutChart radius={60} percentage={33} color="#fff" strokeWidth={10}/>
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
              <Text style={{color : "#fff",fontSize: 26 , fontWeight: "bold"}}>11:02<Text  style={{color : "#fff",fontSize: 13}}>PM</Text></Text>
              <Text style={{color : "#f9f9f9", marginBottom: 10}} >Went to bed</Text>
            </View>
              <View>
                <Text style={{color : "#fff",fontSize: 26 , fontWeight: "bold"}} >07:34</Text>
              <Text style={{color : "#f9f9f9", marginBottom: 10}} >Woke Up</Text>
              </View>
          </View>
        </View>

        <LineChart
          style={{ marginTop:  30,marginBottom: 80 }}
          data={data}
          width={screenWidth-15}
          height={256}
          verticalLabelRotation={30}
          yAxisInterval={10} 
          xAxisInterval={10} 
          chartConfig={chartConfig}
          bezier
          yAxisLabel="kg "
          yAxisSuffix="k"
        />

        <Text style={{color : "#fff", marginTop:  35}} >below will ad a list containing animated list of the past X (like 10) history tracks of sleep etc..</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor : "#fff", 
    backgroundColor: '#131313',
    alignItems: 'center',
    marginTop:  Constants.statusBarHeight  , 
    marginTop: 35,
  },
  head : { 
    width: width -30,  
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
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor : "#3cb5b1",
    borderRadius: 12,
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
    backgroundColor: "#3cb5b1",
    borderRadius: 15
  },
  doubleBox:  { 
    width : width -30,
    backgroundColor: "#3cb5b1",
    borderRadius: 15 ,
    marginVertical : 25, 
    paddingVertical: 20,
  },
  twoCol : {
    width: width -30 ,
    marginVertical : 3, 
    flexDirection: "row",
    justifyContent: "space-evenly", 
  }
});
