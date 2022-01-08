import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle ,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackActions } from '@react-navigation/native';

import { SharedElement } from 'react-navigation-shared-element';


const {width, height} = Dimensions.get("screen");
const s = width * 0.68;
const tryToSee = { 
  ITEM_WIDTH : s,
  ITEM_HEIGHT: s *1.5,
  RADIUS: 18,
  SPACING : 12,
  FULL_SIZE: s + 12 * 2
}

export default function Measure( props, {navigation} )  { 
    
    const { item } = props.route.params;
    
    return (
        <View style={styles.container}>
                <SharedElement id={`item.${item.id}.photo`}  style={[StyleSheet.absoluteFillObject]}>
                    <View style={[StyleSheet.absoluteFillObject, { borderRadius: 0}]}>
                        <Image 
                            source={{uri: item.image}} 
                            style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
                        />
                    </View>   
                </SharedElement>
                {/* <TouchableOpacity onPress={() => navigation.goBack }> */}
                    <Icon name="arrow-back-outline" 
                        onPress={() => navigation.goBack() } 
                        style={styles.icon} 
                        size={21} 
                        color="#000" 
                    />
                {/* </TouchableOpacity> */}
                <SharedElement id={`item.${item.key}.location`} > 
                    <Text style={[styles.location]}>{item.location}</Text>
                </SharedElement>
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
    top: tryToSee.SPACING * 2,
    left: tryToSee.SPACING * 2,
  },
  icon : {
      marginTop: 55,
      marginLeft: 25
  }
});

Measure.sharedElements = (route, otherRoute, showing) => {
    const item = route.params.item;
    return [`item.${item.id}.photo`];
  };