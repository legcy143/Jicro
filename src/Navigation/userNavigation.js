import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserHome from '../screen/Home/Users/UserHome';

const Tab = createBottomTabNavigator();

function UserNavigation() {
  return (
    <Tab.Navigator
    initialRouteName="UserHome"
    screenOptions={{headerShown:false}}
    >
      <Tab.Screen name="UserHome" component={UserHome} />
    </Tab.Navigator>
  );
}

export default UserNavigation