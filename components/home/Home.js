import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
 
const {width, height} = Dimensions.get("screen");
 
 
export default function Home() { 
  

  return (
    <View style={styles.container}>
        <Text>i'm Home lol </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
