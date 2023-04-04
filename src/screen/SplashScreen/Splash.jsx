import { View, Text, Image, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { getData } from '../../helper/LocalStorage';
import { main } from '../../utils/colors';

const LETTER_BOUNCE_DURATION = 700;

const BouncingText = ({ text, delay, onComplete }) => {
  const animatedValues = useRef(text.split('').map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = animatedValues.map((animatedValue, index) => {
      return Animated.sequence([
        Animated.delay(delay + index * 300),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: LETTER_BOUNCE_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: LETTER_BOUNCE_DURATION,
          useNativeDriver: true,
        }),
      ]);
    });

    Animated.parallel(animations).start(onComplete);
  }, []);

  return (
    <View style={{ flexDirection: 'row' }}>
      {text.split('').map((letter, index) => (
        <Animated.Text
          key={`${letter}-${index}`}
          style={{
            fontWeight: '900',
            fontSize: 130,
            color:"#fff",
            transform: [{ translateY: animatedValues[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0, -25],
            }) }],
          }}
        >
          {letter}
        </Animated.Text>
      ))}
    </View>
  );
};

const Splash = ({ navigation }) => {
  const underlineValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getData('onBoarding').then((e) => {
      setTimeout(() => {
        navigation.navigate(e === 'true' ? 'Auth' : 'OnBoarding');
      }, 4000);
    });
  }, []);

  const onBounceComplete = () => {
    Animated.timing(underlineValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        backgroundColor: '#684DE9',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BouncingText text="Jicro" delay={1000} onComplete={onBounceComplete} />
      <Animated.View
        style={{
          borderBottomColor: '#fff',
          borderBottomWidth: 5,
          width: 220,
          // marginTop: 10,
          transform: [
            {
              scaleX: underlineValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

export default Splash;
