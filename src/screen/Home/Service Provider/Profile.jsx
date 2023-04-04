import { View, Text, TextInput, TouchableOpacity, PermissionsAndroid , ScrollView} from 'react-native'
import React, { useEffect, useRef } from 'react'
import Geolocation from '@react-native-community/geolocation';
import { main } from '../../../utils/colors'
import MapView from 'react-native-maps';
import SelectDropdown from 'react-native-select-dropdown'
import Button from './../../components/Button';
import RBSheet from "react-native-raw-bottom-sheet";
const prof = ["Electrician", "Plumbing", "Carpentering", "House Cleaning", "Cooking", "Gardener", "Home organizer", "Painter", "Personal trainer", "Massage therapist", "Hair stylist or barber", "Technician", "Mobile car wash and Fixing."];
const Profile = ({navigation}) => {
  const refRBSheet = useRef();
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        Geolocation.setRNConfiguration({
          // skipPermissionRequests:true
          locationProvider: "android"
        });
        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            console.log(position.coords);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 100000,
            provider: Geolocation.PROVIDER_NETWORK, // or Geolocation.PROVIDER_FUSED
          },
        );
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);
  return (
    <ScrollView className="h-screen bg-white p-2" >
      <Text className={`text-[${main.primary}] text-6xl font-black text-center`} >Jicro</Text>
      <View>
        <View className="w-full h-44 bg-slate-400 rounded-2xl" >
        </View>
        <View className="w-full mt-[-70px] h-32 flex justify-center items-center" >
          <View className="w-32 h-32 rounded-full bg-slate-300 border-white border-8" ></View>
        </View>
        <View>
          <TextInput
            keyboardType="number-pad"
            cursorColor={'#1c1c1c'}
            className=" rounded-xl h-12 text-black font-bold text-md px-2 mb-2 border-2 border-gray-300"
            placeholder="Name of Service Provider/Shop"
            placeholderTextColor={'#727272'}
          />
          <TextInput
            keyboardType="number-pad"
            cursorColor={'#1c1c1c'}
            className=" rounded-xl h-12 text-black font-bold text-md px-2 border-2 border-gray-300"
            placeholder="Phone Number"
            placeholderTextColor={'#727272'}
          />
          <SelectDropdown
            data={prof}
            className="w-full"
            defaultButtonText="Select a Profession"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            buttonStyle={{
              width: "100%",
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: "#dadada",
              fontWeight: 400
            }}
            buttonTextStyle={{
              fontWeight: 700
            }}
          />
          <Button func={() => refRBSheet.current.open()} text="Add Location" />
          <Text className="text-gray-600 mt-1 font-black text-lg" >Add Your Previous Works</Text>
          <View className="w-full h-44 bg-slate-300 rounded-2xl" >
          </View>
          <Button func={() => navigation.navigate("ServiceProviderHome")} text="Continue" />
        </View>
        <RBSheet
          height={400}
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: main.primary
            }
          }}
        >
          <Text className="text-black" >Map Didnt Rendered</Text>
          {/* <YourOwnComponent /> */}
        </RBSheet>
      </View>
      <Text className="my-2"></Text>
    </ScrollView>
  )
}

export default Profile