import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { main } from "../../../../utils/colors";
import SquareBoxs from './SquareBoxs';
import Button from './../../../components/Button';

const Trending = ({navigation}) => {
  return (
    <View style={main.shadows} className="bg-white w-11/12 h-60 rounded-lg p-3 m-auto my-5 flex flex-col justify-between">
      <SquareBoxs navigation={navigation} data={
        [
          {
            id:1,
            text:"",
            img:"",
            redirectTo:"TrendingExtended"    
          },
          {
            id:2,
            text:"",
            img:"",
            redirectTo:""    
          },
          {
            id:3,
            text:"",
            img:"",
            redirectTo:""    
          },
          {
            id:4,
            text:"",
            img:"",
            redirectTo:""    
          }
        ]
      } />
            <SquareBoxs data={
        [
          {
            id:1,
            text:"",
            img:"",
            redirectTo:""    
          },
          {
            id:2,
            text:"",
            img:"",
            redirectTo:""    
          },
          {
            id:3,
            text:"",
            img:"",
            redirectTo:""    
          },
          {
            id:4,
            text:"",
            img:"",
            redirectTo:""    
          }
        ]
      } />
      <Button text="Demand a Service" func={()=>{
        navigation.navigate('DemandService')
      }} />
    </View>
  )
}

export default Trending