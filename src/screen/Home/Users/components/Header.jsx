import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, TextInput, Image, Keyboard, Animated, Easing, Text } from 'react-native';
import { main } from "../../../../utils/colors";

const Header = () => {
  const [inputSelected, setInputSelected] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [animatedValue] = useState(new Animated.Value(0));
  const [fadeValue] = useState(new Animated.Value(1));
  const placeholders = ['Search for plumbers, carpenters, beautician', 'Try "Bulb Fixing 💡" or "Door bell Not.. 🛎"', 'Find Services in Just one Click', 'Search "Cupboard Cleaning"',"Try 'Jhadu Pocha' or 'khana Bna de'","I want to take Massage 😣"];

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  console.log(placeholderIndex)
  const animatePlaceholder = () => {
    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 250,
        easing: Easing.cubic,
        useNativeDriver: false,
      }),
      Animated.timing(fadeValue, {
        toValue: 0,
        duration: 500,
        easing: Easing.cubic,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
      animatedValue.setValue(0);
      fadeValue.setValue(1);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animatePlaceholder();
    }, 2000);

    return () => clearInterval(interval);
  }, [placeholderIndex]);
  const placeholderTranslateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0],
  });

  const placeholderOpacity = fadeValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View className="bg-[#684DE9] w-full h-32 rounded-b-3xl p-3 flex" >
        <View className="flex flex-row items-center gap-2 mb-3" >
          <Image source={require('../assets/location.png')} className="w-8 h-8" />
          <View>
            <Text className="text-white text-2xl font-bold">Jaganpura</Text>
            <Text className="text-white text-md font-bold">East Lakshmi Nagar, Patna</Text>
          </View>
        </View>
        <View className="h-10 w-full rounded-2xl bg-gray-100 flex flex-row items-center">
          <Image source={require('../assets/search.png')} className="w-5 h-5 mx-3" />
          <Animated.Text
          className="text-gray-600 font-bold"
            style={{
              transform: [{ translateY: placeholderTranslateY }],
              opacity: placeholderOpacity,
              // color:"#1c1c1c"
            }}>
            {placeholders[placeholderIndex]}
          </Animated.Text>
          <TextInput className="h-full flex-1" style={{ fontSize: 16 }} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;
