import React, {useState, useEffect, useCallback } from 'react';
import { findNodeHandle,Pressable, StyleSheet, Switch, TouchableOpacity,Text, View, ScrollView, Dimensions, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchSelector from 'react-native-switch-selector';


const {width, height} = Dimensions.get("screen");
 
export default function Settings( {navigation } ) {   

  const [KeepScreenOn, setKeepScreenOn] = useState(false);


  return (
      <ScrollView > 
    <View style={styles.container}>
      <View style={styles.section}>
        <Icon name="build-outline" style={styles.icon} size={21} color="#666" /> 
        <Text style={styles.text}>General</Text>
      </View> 

      <View style={styles.divider}/> 

      <Pressable style={({ pressed }) => [ { backgroundColor: pressed ? '#F0F0F0' : 'white' },styles.pressable]}  onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Edit Profile</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <View style={styles.switchView} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.switchText}>Weight Unit</Text>
        <SwitchSelector  
          style={styles.switch} 
          textColor={'#888'} 
          buttonColor={'#878787'} 
          backgroundColor={'#f1f1f1'}
          borderRadius={18}
          fontSize={16}
          bold={true}
          height={35}
          animationDuration={100}
          options={[{ label: 'kg', value: 'kg' },{ label: 'lbs', value: 'lbs' }]}  
          initial={0} onPress={value => console.log(`Call onPress with value: ${value}`)} 
        />
      </View>

      <View style={styles.switchView} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.switchText}>Height Unit</Text>
        <SwitchSelector  
          style={styles.switch} 
          textColor={'#888'} 
          buttonColor={'#878787'} 
          backgroundColor={'#f1f1f1'}
          borderRadius={18}
          fontSize={16}
          bold={true}
          height={35}
          animationDuration={100}
          options={[{ label: 'cm', value: 'cm' },{ label: 'in', value: 'in' }]}  
          initial={0} onPress={value => console.log(`Call onPress with value: ${value}`)} 
        />
      </View>
      <View style={styles.switchView} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.switchText}>Keep screen on</Text>
        <Switch
          style={styles.toggleSwitch} 
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={KeepScreenOn ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setKeepScreenOn(prev => !prev)}
          value={KeepScreenOn}
        />
      </View>
  
      <View style={styles.section}>
        <Icon name="notifications-outline" style={styles.icon} size={21} color="#666" /> 
        <Text style={styles.text}>Notification</Text>
      </View> 

      <View style={styles.divider}/> 

      <Pressable style={({ pressed }) => [ { backgroundColor: pressed ? '#F0F0F0' : 'white' },styles.pressable]} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>App Notifications</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>
      
      <Pressable style={({ pressed }) => [ { backgroundColor: pressed ? '#F0F0F0' : 'white' },styles.pressable]} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Reminder</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>
 
      <View style={styles.section}>
        <Icon name="exit-outline" style={styles.icon} size={21} color="#666" /> 
        <Text style={styles.text}>More</Text>
      </View>

      <View style={styles.divider}/> 
      
      <Pressable style={({ pressed }) => [ { backgroundColor: pressed ? '#F0F0F0' : 'white' },styles.pressable]} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Country</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <Pressable style={({ pressed }) => [ { backgroundColor: pressed ? '#F0F0F0' : 'white' },styles.pressable]} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Language</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <Pressable style={({ pressed }) => [ { backgroundColor: pressed ? '#F0F0F0' : 'white' },styles.pressable]} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Share</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>

      <Pressable style={({ pressed }) => [ { backgroundColor: pressed ? '#F0F0F0' : 'white' },styles.pressable]} onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Privacy</Text>
        <Icon name="chevron-forward" style={styles.icon} size={21} color="#666" /> 
      </Pressable>
      <Pressable style={ styles.textButton } onPress={() => navigation.push("Privacy")}>
        <Text style={styles.textNavigation}>Delete Data</Text>
      </Pressable>
 
      <Text  style={styles.info} >Version 1.0 </Text> 
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
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
  switch :{
    flex : 1,
    flexDirection: 'row',
    paddingHorizontal: 10, 
    paddingVertical: 1, 
  },
  toggleSwitch :{
    flex : 1,
    flexDirection: 'row',
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
    marginHorizontal: 15, 
  },
  textNavigation: {
    width: width-55,
    paddingVertical: 11, 
    paddingHorizontal: 5, 
    fontSize: 19,
    color: "#555", 
  },
  info : {  
    fontSize: 12,
    paddingTop: 50,   
    color: "#555"
    
  },
  icon : {  
    alignSelf: 'center',
  }, 
  switchView : {    
    flexDirection: 'row',
    width: width ,
    alignItems: 'center',
  },
  textButton: {
    width: width ,
    paddingHorizontal: 20, 
  },
  switchText : {      
    width: width-135,
    paddingVertical: 11, 
    paddingHorizontal: 20, 
    fontSize: 19,
    color: "#555", 
  }, 
  section : {
    width: width, 
    paddingHorizontal: 10, 
    paddingTop: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    alignContent: "center",
  },
  divider : { 
    height: 1,
    width: width - 30,
    backgroundColor:  "#999",
    marginTop: 1,
    marginBottom: 7
  }
});
