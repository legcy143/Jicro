import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServiceProviderHome from '../screen/Home/Service Provider/ServiceProviderHome';
import Profile from "../screen/Home/Service Provider/Profile";


const Tab = createBottomTabNavigator();

function ServiceProvidernavigation() {
  return (
    <Tab.Navigator
    initialRouteName="ServiceProviderHome"
    screenOptions={{headerShown:false}}
    >
      <Tab.Screen name="ServiceProviderHome" component={ServiceProviderHome} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default ServiceProvidernavigation