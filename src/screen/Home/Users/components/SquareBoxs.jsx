import { View, Text, TouchableOpacity } from 'react-native'

import React from 'react'

const SquareBoxs = ({navigation,data}) => {
    return (
        <View className="flex flex-row justify-around gap-5">
            {
                data?.map(({ id, text, img,redirectTo }) => {
                    return <TouchableOpacity key={id} onPress={()=>{
                        navigation?.navigate(redirectTo)
                    }} activeOpacity={0.4} className="
                    aspect-square h-20 basis-1/5
                     bg-gray-200 rounded-xl flex justify-between flex-col items-center " >
                        <Text className="font-bold text-stone-700" >{text}</Text>
                    </TouchableOpacity>
                })
            }
        </View>
    )
}

export default SquareBoxs