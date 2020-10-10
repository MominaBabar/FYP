import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import store from './store'
import TitleScreen from './components/screens/SplashScreen'
import Additemmodal from './components/Additemmodal'
import ShoppingList from './components/ShoppingList'
import LoginScreen from './components/screens/LoginScreen'
import HomeScreen from './components/screens/HomeScreen'
import WebScreen from './components/screens/WebScreen';
import ConnectScreen from './components/screens/ConnectScreen';

import {startSocketIO} from './components/screens/startSocketIO';

import PropertiesScreen from './components/screens/PropertiesScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import GalleryScreen from './components/screens/GalleryScreen';
import CameraScreen from './components/screens/CameraScreen';
import MapScreen from './components/screens/move';
import CleaningInfoScreen from './components/screens/CleaningInfoScreen';
import CleaningCompleteScreen from './components/screens/CleaningCompleteScreen';
import TimeScreen from './components/screens/TimeScreen';
import SettingScreen from './components/screens/SettingScreen'
import VideoScreen from './components/screens/VideoScreen'
import VidScreen from './components/screens/VidScreen'
import SplashScreen from './components/screens/SplashScreen';
import EditScreen from './components/screens/EditScreen';
import ImageScreen from './components/screens/ImageScreen';
import ManualControl from './components/screens/ManualControl';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View,StyleSheet,TouchableOpacity,Button,Image} from 'react-native';
import { ROBOT } from './actions/types';

import 'react-native-gesture-handler';
import { navigationRef } from './components/screens/RootNavigation';
import * as RootNavigation from './components/screens/RootNavigation';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import BackgroundTimer from 'react-native-background-timer';
import socketIO from "socket.io-client";



BackgroundTimer.runBackgroundTimer(() => { 
  //code that will be called every 3 seconds
  var v = new Date();
  var day = v.getUTCDate(); 
  var month = v.getUTCMonth()+1;
  var year = v.getUTCFullYear();
  var hour = v.getUTCHours()+5;
  var min = v.getUTCMinutes();
  var g = day;
      var g1 = month;
      if(day<=9){
        g = '0'+day;
       }
       if(month<=9){
         g1 = '0'+month
       }
       if(hour<=9){
        hour = '0'+hour;
       }
       if(min<=9){
         min = '0'+min
       }
       console.log(g,g1);

  if(global.t !== undefined){
    
    
    global.t.forEach(element => {
      var y = element.date.substring(0, 4);
      var m = element.date.substring(5, 7);
      var d = element.date.substring(8, 10);
      var h = element.date.substring(11, 13);
      var mi = element.date.substring(14, 16);
      console.log("-----");
      
      console.log(g,g1,year,hour,min);
      console.log(d,m,y,h,mi);
      console.log("-----");
      if(year==y && g1==m && g==d && hour==h && (min==mi || min-1==mi || min+1==mi)){
          console.log("alarm reached.");
          socket.emit('alarm'); 
        
      }
      
    });
  }
  
  }, 
  55000);

export default class App extends React.Component {

  render()
  {
    return (
      <Provider store={store}>
        <MyStack/>
      </Provider>
    );
  }
 
}

const Stack = createStackNavigator();
function MyStack() {
  console.disableYellowBox= true;
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> 
      <Stack.Screen
         
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
         
         name="Connect"
         component={ConnectScreen}
         options={{ headerShown: false }}
       />


         <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
         
        />
        {/* <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Manual"
          component={ManualControl}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Web"
          component={WebScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{ headerShown: false }}
        /> */}
       
         <Stack.Screen
          name="Info"
          component={PropertiesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="Alarm"
          component={TimeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cleaning"
          component={CleaningInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Complete"
          component={CleaningCompleteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Image"
          component={ImageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vid"
          component={VidScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  avatar: {
    width: 60,
    height:60,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: "white",
    marginBottom:18,
    marginRight:20,
    marginTop:6
    
  },
});