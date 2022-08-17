import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import Weatherinfo from './components/Weatherinfo';
import Reloadapp from './components/Reloadapp';


const WEATHER_API_KEY='b626d5e24312626195d2983562218bf1'
const BASE_WEATHER_URL='https://api.openweathermap.org/data/2.5/weather?'

export default function App() {
  const [errorMessage,setErrorMessage]= useState(null)
  const [currentWeather,setCurrentWeather]=useState(null)
  const [unitsystem,currentunitsystem]=useState('metric')
  
  useEffect(()=>{

    load()
  },[])

  async function load(){
    try {
      let {status} = await Location.requestBackgroundPermissionsAsync()
      if(status!= 'granted')
      {
          setErrorMessage('NO access')
          return
      }
      const location = await Location.getCurrentPositionAsync()
      const {latitude,longitude}= location.coords
      const weatherurl =`${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsystem}&appid=${WEATHER_API_KEY}`
      
      const response = await fetch(weatherurl)

      const result = await response.json()
      

      if(response.ok)
      {
        setCurrentWeather(result)
      }
      else{
        setErrorMessage(result.errorMessage)
      }
    } catch (error) {
        setErrorMessage(error.errorMessage)
    }
  }

  if(currentWeather)
  {
    const {main: { temp },
  } = currentWeather
  
  
  return (
    <View style={styles.container}>
      <Reloadapp load={load}/>
      <Weatherinfo currentWeather={currentWeather}/>
      <StatusBar style="auto" />
    </View>
  )}else{
    return (
      <View style={styles.container}>
        <Text>{errorMessage}
  
        </Text>
        <StatusBar style="auto" />
      </View>

  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
