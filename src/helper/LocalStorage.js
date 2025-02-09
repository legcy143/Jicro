import  AsyncStorage  from '@react-native-async-storage/async-storage';

export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('Error storing data:', error);
    }
};

export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // console.log(value);
        return value
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };