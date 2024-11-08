import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../home/home';
import Catadores from '../catadores/Catadores';
import Agendamento from '../agendamento/agendamento';
import Reciclagem from '../paginaReciclagem/reciclagem';
import { Image } from '@rneui/base';

const Tab = createBottomTabNavigator();

export default function Navegacao() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center' , justifyContent: 'center' , top: 10}}>
              <Image
                source={require('../../../../res/img/navegação/botao-de-inicio.png')}
                resizeMode='contain'
                style={{
                  width: 15,
                  height: 15,
                  tintColor: focused ? '#0A9D3C' : '#0A9D3C'
                }}
              />

            </View>
          )
        }} />
        <Tab.Screen name="BUSCAR" component={Catadores} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center' , justifyContent: 'center' , top: 10}}>
              <Image
                source={require('../../../../res/img/navegação/big-search-len.png')}
                resizeMode='contain'
                style={{
                  width: 15,
                  height: 15,
                  tintColor: focused ? '#0A9D3C' : '#0A9D3C'
                }}
              />

            </View>
          )
        }} />
        <Tab.Screen name="AGENDAR" component={Agendamento} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center' , justifyContent: 'center' , top: 10}}>
              <Image
                source={require('../../../../res/img/navegação/calendario.png')}
                resizeMode='contain'
                style={{
                  width: 15,
                  height: 15,
                  tintColor: focused ? '#0A9D3C' : '#0A9D3C'
                }}
              />

            </View>
          )
        }} />
        <Tab.Screen name="RECICLAGEM" component={Reciclagem} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center' , justifyContent: 'center' , top: 10}}>
              <Image
                source={require('../../../../res/img/navegação/simbolo-de-reciclagem.png')}
                resizeMode='contain'
                style={{
                  width: 15,
                  height: 15,
                  tintColor: focused ? '#0A9D3C' : '#0A9D3C'
                }}
              />

            </View>
          )
        }} />
      </Tab.Navigator>
  );
}