import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle ,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';

const {width, height} = Dimensions.get("screen");
 
const s = width * 0.68;
const tryToSee = { 
  ITEM_WIDTH : s,
  ITEM_HEIGHT: s *1.5,
  RADIUS: 18,
  SPACING : 12,
  FULL_SIZE: s + 12 * 2
}

export default function Measure( {navigation, route} )  { 
    const  item  = navigation.getParam("item");
    return (
        <View style={styles.container}>
                <View style={[StyleSheet.absoluteFillObject]}>
                <Image 
                    source={{uri: item.image}} 
                    style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
                />
                </View>   
                <Text style={[styles.location]}>{item.location}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  location : {
    fontSize: 30,
    color : 'white',
    fontWeight: 'bold',
    width:  tryToSee.ITEM_WIDTH * 0.8,
    textTransform : 'uppercase',
    position: 'absolute',
    top: 100,
    left: tryToSee.SPACING * 2,
  },
});
