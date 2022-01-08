import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle ,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element/build/v4';

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
                <SharedElement id={`item.${item.id}.photo`}  style={[StyleSheet.absoluteFillObject]}>
                    <View style={[StyleSheet.absoluteFillObject, { borderRadius: 0}]}>
                        <Image 
                            source={{uri: item.image}} 
                            style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
                        />
                    </View>   
                </SharedElement>
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
});

Measure.sharedElements = (route, otherRoute, showing) => {
    const item = route.params.item;
    return [`item.${item.id}.photo`];
  };