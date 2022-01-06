import React, {useState, useEffect, useCallback } from 'react';
import { SafeAreaView,findNodeHandle,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
 
const {width, height} = Dimensions.get("screen");
 
 
export default function Statistics() { 
  

  return (
    <SafeAreaView style={styles.container}>
        <Text style={{color: "white"}}>i'm Statistics lol </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
  },
});
