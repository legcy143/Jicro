import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import UniversalHeader from '../../components/Universalheader'
import { main } from "../../../utils/colors"

const Details = ({ navigation }) => {
    return (
        <View className="bg-white">
            <UniversalHeader navigation={navigation} />
            <View className="h-screen" >
                <Text className="text-black font-black text-2xl text-center capitalize" >under Construction</Text>
            </View>
        </View>
    )
}

export default Details