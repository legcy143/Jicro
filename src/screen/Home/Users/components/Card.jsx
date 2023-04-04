import { View, Text, Image } from 'react-native'
import React from 'react'
import { main } from "../../../../utils/colors"
import Button from '../../../components/Button'
const Card = ({navigation}) => {
  return (
    <View style={main.shadows} className="bg-white rounded-xl mx-2 w-50 h-[12rem] p-3 my-2 flex flex-col justify-around" >
      <Image
        source={{ uri: "https://picsum.photos/600/300" }}
        className="w-50 h-40 rounded-xl"
      />
      <Text className="text-gray-700 text-[15px] font-semibold text-center" >Water Tap Fitting with Free Washer</Text>
      <View className="h-26 flex flex-row justify-between items-center" >
        <Image
          source={{ uri: "https://picsum.photos/100/100" }}
          className="w-14 h-14 rounded-full"
        />
        <View className="w-20 h-10 bg-gray-200 rounded-xl" ></View>
        <View className="w-20 h-10 bg-gray-200 rounded-xl" ></View>
        <View className="w-20 h-10 bg-gray-200 rounded-xl" ></View>
      </View>
      {/* <View>
        <Text className="text-md text-gray-500" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae fuga? Perferendis!...</Text>
      </View> */}
      <Button func={()=>{
        navigation.navigate("Details")
      }} text="View Details" />
    </View>
  )
}

export default Card