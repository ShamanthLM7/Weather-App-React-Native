import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import {colors} from '../utils/index'
const {PRIMARY_COLOR,SECONDARY_COLOR,BORDER_COLOR,Third_color}=colors
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weatherinfo({currentWeather}) {
    const{
        main: {temp,humidity},
        weather: [deatails],
        name,
        sys: {country},
        wind: {speed},
    }=currentWeather
    const {icon,main}=deatails
    const {description}=deatails
    const iconUrl=`https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
    <View style={styles.Weatherinfo}>
        <Text style={styles.textSec}>{name}</Text>
        <Text>{country}</Text>
        <Image style={styles.Weathericon}source={{uri:iconUrl}}/>
      <Text style={styles.textPrimary}><FontAwesome5 name="temperature-high" size={30} color="red" /><Text> {temp}</Text></Text>
      <Text style={styles.texthum}><Entypo name="drop" size={24} color="blue" /><Text> {humidity}</Text></Text>
      <Text style={styles.textwind}><MaterialCommunityIcons name="weather-windy" size={24} color="orange" /><Text> {speed}</Text></Text>
      
      
      <Text style={styles.textbor}>{description}</Text>
    </View>
  )
}

const styles=StyleSheet.create({

    Weatherinfo:{
        alignItems:'center',
        
    },
    Weathericon:{
        width:200,
        height:200,
        
    },
    textPrimary:{
        fontSize:25,
        color:PRIMARY_COLOR,
        marginBottom:10
    },
    textSec:{
        fontSize:40,
        color:SECONDARY_COLOR
    },

    textbor:{
        fontSize:25,
        textTransform:'capitalize',
        marginTop:20
    },
    texthum:{
        fontSize:25,
        color:SECONDARY_COLOR,
        marginBottom:10
    },
    textwind:{
        fontSize:25,
        color:Third_color,
        marginBottom:10
    },
})