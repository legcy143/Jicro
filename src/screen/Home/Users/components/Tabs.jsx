import { View, Text,Image } from 'react-native'
import React from 'react'
import { main } from "../../../../utils/colors";
const Tabs = () => {
    return (
        <View  className=" m-2 rounded-lg w-50 h-14 justify-between flex items-center flex-row " >
            <View className="bg-gray-200 h-10 w-24 flex justify-center items-center rounded-xl " > 
                <Text className="text-black font-bold" >Drop-Down</Text>
            </View>
        <Image 
            source={{ uri: "https://cdnl.iconscout.com/lottie/premium/thumb/filter-7428378-6043178.gif" }}
          className={`w-16 h-16`}
        />
        </View>
    )
}

export default Tabs