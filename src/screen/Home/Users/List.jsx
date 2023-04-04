import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import UniversalHeader from './../../components/Universalheader';
import Card from './components/Card';
import Tabs from './components/Tabs';

const List = ({navigation}) => {
  return (
    <View className="bg-white h-screen">
      <UniversalHeader navigation={navigation} />
      <View className="my-[-10px]" >
      <Tabs/>
      </View>
      <ScrollView className="bg-white" >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ScrollView>
    </View>
  )
}

export default List