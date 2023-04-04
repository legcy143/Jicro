import { View, Text } from 'react-native'
import React from 'react'
import Card from './Card';

const Suggested = ({navigation}) => {
    return (
        <>
            <Card navigation={navigation} />
            <Card navigation={navigation} />
            <Card navigation={navigation} />
            <Card navigation={navigation} />
            <Card navigation={navigation} />
            <Card navigation={navigation} />
        </>
    )
}

export default Suggested