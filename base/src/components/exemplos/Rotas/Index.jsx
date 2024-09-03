// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import ProfileView from '../../../telas/projeto/profile/Profile';
import AddCards from '../../../telas/projeto/pagamento/AddCard';
import Home from '../../../telas/projeto/home/Home';
import CreditCardInfoScreen from '../../../telas/projeto/pagamento/Cardss';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Home />
  );
}

function DrillScreen() {
  return (
    <ProfileView />
  );
}
function StatsScreen() {
  return (
    <AddCards />
  );
}
function CalendarScreen() {
  return (
    <CreditCardInfoScreen />
  );
}

const Tab = createBottomTabNavigator();

export function Inicio() {
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          // Customize tab bar styles
          tabBarStyle: { backgroundColor: 'black', borderTopColor: 'white', borderTopWidth: 1 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Drills':
                iconName = focused ? 'basketball' : 'basketball-outline';
                break;
              case 'Statistics':
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                break;
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Calendar':
                iconName = focused ? 'calendar' : 'calendar-outline';
                break;
              
            }
            return <Icon type='ionicon' name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'orange',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={DrillScreen} options={{headerShown: false}}/>
        <Tab.Screen name="" component={StatsScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Calendar" component={CalendarScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
  )
}