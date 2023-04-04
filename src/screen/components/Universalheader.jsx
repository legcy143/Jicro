import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {main} from "../../utils/colors"
const UniversalHeader = ({navigation}) => {
  return (
    <View  style={main.shadows} className="h-14 w-50 rounded-b-3xl flex flex-row justify-between bg-white items-center mb-2" >
   <TouchableOpacity onPress={()=>{
    navigation.goBack()
   }}>
   <Image
        source={require("./assets/left.png")}
        className="h-12 w-12"
    />
   </TouchableOpacity>
    <Image
        source={require("../../public/logo_mini.png")}
        className="h-14 w-14 rounded-full"
    />
    </View>
  ) 
}

export default UniversalHeader