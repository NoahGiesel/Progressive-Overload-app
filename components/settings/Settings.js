import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle,Pressable, StyleSheet, Button, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const {width, height} = Dimensions.get("screen");
 
 
export default function Settings( {navigation } ) {   
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Icon name="person" style={styles.icon} size={21} color="#666" /> 
        <Text style={styles.text}>Account</Text>
      </View> 
      
      <Pressable style={styles.pressable} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Edit Profile</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <Pressable style={styles.pressable} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Weight Unit</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <Pressable style={styles.pressable} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Distance Unit</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>
  
      <View style={styles.section}>
        <Icon name="notifications" style={styles.icon} size={21} color="#666" /> 
        <Text style={styles.text}>Notification</Text>
      </View> 

      <Pressable style={styles.pressable} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Notifications</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <Pressable style={styles.pressable} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>App Notifications</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>
 
      <View style={styles.section}>
        <Icon name="exit" style={styles.icon} size={21} color="#666" /> 
        <Text style={styles.text}>More</Text>
      </View>

      <Pressable style={styles.pressable} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Country</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <Pressable style={styles.pressable} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Language</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <Pressable style={styles.pressable} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Share</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <Pressable style={styles.pressable} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Privacy</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#fff",
    alignItems: 'center', 
  },
  text : {
    fontSize: 21,
    paddingVertical: 11, 
    marginHorizontal: 11,
    alignSelf: 'center',
    color: "#333"
  },
  pressable: { 
    flexDirection: 'row',
  },
  textNavigation: {
    width: width-55,
    paddingVertical: 11, 
    paddingHorizontal: 5, 
    fontSize: 20,
    color: "#555"
  },
  icon : {  
    alignSelf: 'center',
  },
  section : {
    width: width, 
    paddingHorizontal: 10, 
    paddingTop: 10,
    paddingBottom: 0,
    borderBottomWidth : 1,
    flexDirection: 'row',
    alignContent: "center",
    borderBottomColor: "#C4C4C4", 
  }
});
