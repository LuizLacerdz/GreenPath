import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { CleanTabBar } from 'react-navigation-tabbar-collection';
import Icon from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../home/Home';
import Agendamento from '../agendamento/agendamento';
import Catadores from '../catadores/Catadores';
import Reciclagem from '../paginaReciclagem/reciclagem';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <CleanTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            icon: ({ focused, color, size }) => (
              <Icon name="home" size={20} color={'#000'} />
            ),
            color: 'primary',
          }}
        />
        <Tab.Screen
          name="Catadores"
          component={Catadores}
          options={{
            title: 'Catadores',
            icon: ({ focused, color, size }) => (
               <Icon name="home" size={20} color={'#000'} />
            ),
            color: 'info',
          }}
        />
        <Tab.Screen
          name="Reciclagem"
          component={Reciclagem}
          options={{
            title: 'Reciclagem',
            icon: ({ focused, color, size }) => (
               <Icon name="home" size={20} color={'#000'} />
            ),
            color: 'warning',
          }}
        />
        <Tab.Screen
          name="Agenda"
          component={Agendamento}
          options={{
            title: 'Agenda',
            icon: ({ focused, color, size }) => (
               <Icon name="home" size={20} color={'#000'} />
            ),
            color: 'danger',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});