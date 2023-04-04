import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { main } from '../../utils/colors'
const Button = ({ text, func, className }) => {
  return (
    <TouchableOpacity onPress={func} activeOpacity={0.5} style={{
      backgroundColor: main.primary
    }} className={`w-full h-12 rounded-xl mt-1 flex justify-center items-center ${className}`} >
      <Text className="text-white font-bold text-xl" >{text}</Text>
    </TouchableOpacity>
  )
}

export default Button