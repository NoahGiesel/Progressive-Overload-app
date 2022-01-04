import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle,StyleSheet, TouchableOpacity,Text, View, Dimensions, Image, FlatList, Animated } from 'react-native';
import {Calendar as CalendarComponent , CalendarList, Agenda} from 'react-native-calendars';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const {width, height} = Dimensions.get("screen");
 
 


const timeToString = (time ) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}


export default function Calendar() { 
  
  
  const [items, setItems] = useState({})
  
  const loadItems = (day ) => {
    const items =  items || {};
    
    setTimeout(() => {
      for (let i = -15; i < 25; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime =  timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems  = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems)
    }, 1000);
  }

  const renderItem = (item) => {
    return ( <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
      <Card >
        <Card.Content>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Text  >{item.name}</Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>)
  } 
  return (
    <View style={styles.container}> 

      <Agenda
        style={{ backgroundColor: '#131313'   }}
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-01-06'} 
        renderItem={renderItem}
        showClosingKnob={true}
        // hideExtraDays={false}
        />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',  
    paddingTop: 50
  },
});
