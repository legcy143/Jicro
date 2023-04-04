import { NavigationContainer } from '@react-navigation/native';
import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Splash Screen
import Splash from "./src/screen/SplashScreen/Splash.jsx"
//OnBoarding
import OnBoarding from './src/screen/OnBoarding/OnBoarding';
//Auth
import Auth from './src/screen/Auth/Auth';

// navigation import 
import ServiceProvidernavigation from './src/Navigation/serviceProvidernavigation.js';
//Entry Point
/*
  @Home For User
*/
import UserHome from "./src/screen/Home/Users/UserHome.jsx" 
import TrendingExtended from './src/screen/Home/Users/TrendingExtended';
import DemandService from './src/screen/Home/Users/DemandService';
import Details from './src/screen/Home/Users/Details';
import List from './src/screen/Home/Users/List.jsx';
import UserNavigation from './src/Navigation/userNavigation.js';
/*
  @Home For Service Provider
*/
const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="SplashScreen" 
        options={{ headerShown: false, }}
        component={Splash} />
        <Stack.Screen name="OnBoarding" 
        options={{ headerShown: false, }}
        component={OnBoarding} />
        <Stack.Screen name="Auth" 
        options={{ headerShown: false, }}
        component={Auth} />
        {/* 
            @Screens User
         */}
        {/* <Stack.Screen name="UserHome" 
        options={{ headerShown: false, }}
        component={UserHome} /> */}
        <Stack.Screen name="UserNavigation" 
        options={{ headerShown: false, }}
        component={UserNavigation} />
        <Stack.Screen name="DemandService" 
        options={{ headerShown: false, }}
        component={DemandService} />
        <Stack.Screen name="Details" 
        options={{ headerShown: false, }}
        component={Details} />
        <Stack.Screen name="TrendingExtended" 
        options={{ headerShown: false, }}
        component={TrendingExtended} />
        <Stack.Screen name="List" 
        options={{ headerShown: false, }}
        component={List} />
        {/* 
            @Screens Service_Provider
         */}
        <Stack.Screen name="ServiceProvidernavigation" 
        options={{ headerShown: false, }}
        component={ServiceProvidernavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}