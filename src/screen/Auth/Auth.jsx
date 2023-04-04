import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { main } from "../../utils/colors"
import Seperator from "./components/Seperator"
const Auth = ({navigation}) => {
  return (
    <View className="h-screen" >
      <View className="w-full h-[60%] bg-[#684DE9] flex justify-center items-center" >
        <Image className="w-84 h-84" source={require("./assets/namaste.gif")} />
      </View>
      <View style={main.shadows} className="h-[45%] w-full bg-white mt-[-20px] shadow-xl rounded-3xl py-8 px-2" >
        <Text className="text-[#684DE9] font-black text-6xl text-center" >Welcome</Text>
        <Text className="text-gray-600 font-black text-lg text-center">How is Your Day Today?</Text>
        <Seperator text="Log in or Sign up" />
        <TouchableOpacity onPress={()=>{
          navigation.navigate("UserHome")
        }} activeOpacity={0.5} style={{
          backgroundColor: main.primary
        }} className={`w-full h-12 rounded-xl mt-1 flex justify-center items-center`} >
          <Text className="text-white font-bold text-xl" >Continue with WhatsApp</Text>
        </TouchableOpacity>
        <Seperator text="*" />
        <TouchableOpacity onPress={()=>{
          navigation.navigate("_Profile")
        }} activeOpacity={0.5} style={{
          backgroundColor: main.bgColor
        }} className={`w-50 h-5 rounded-xl mt-1 flex justify-center items-center my-[-10px]`} >
          <Text className="text-gray-500 font-black text-md" >Continue as Service Provider</Text>
        </TouchableOpacity>
        <View className="p-8" >
          <Text className="text-center text-gray-400" >By Continuing as User You are agreeing Our</Text>
          <Text className="text-center text-gray-400 font-black" >Terms and Conditions</Text>
        </View>
      </View>
    </View>
  )
}

export default Auth