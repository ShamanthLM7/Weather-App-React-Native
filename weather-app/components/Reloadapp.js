import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Reloadapp({load}) {
  return (
    <View style={styles.refreshicon}>
      <Foundation onPress={load} name="refresh" size={24} color="black" />
      <Text style={styles.info}><FontAwesome5 name="temperature-high" size={30} color="red" /></Text>
      <Text style={styles.infotxt}>Temperature in Celcius</Text>
      <Text style={styles.info2}><Entypo name="drop" size={21} color="blue" /></Text>
      <Text style={styles.infotxt2}>Humidity in Percentage</Text>
      <Text style={styles.info3}><MaterialCommunityIcons name="weather-windy" size={20} color="orange" /></Text>
      <Text style={styles.infotxt3}>Wind Speed in m/s</Text>
    </View>
  )
}

const styles=StyleSheet.create({
        refreshicon:{
            position:'absolute',
            top:50,
            right:20
        },
        info:{
            position:'absolute',
            top:8,
            right:350,
        },
        info2:{
            position:'absolute',
            top:45,
            right:352,
        },
        info3:{
            position:'absolute',
            top:75,
            right:350,
        },
        infotxt:{
            position:'absolute',
            top:12,
            right:45,
            fontSize:15,
            width:300,
            
        },
        infotxt2:{
            position:'absolute',
            top:45,
            right:45,
            fontSize:15,
            width:300,
            
        },
        infotxt3:{
            position:'absolute',
            top:75,
            right:45,
            fontSize:15,
            width:300,
            
        },


})