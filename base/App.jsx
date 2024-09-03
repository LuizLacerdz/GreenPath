import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Login from './src/telas/projeto/login/Login';
import Cadastro from './src/telas/projeto/cadastro/Cadastro';
import Home from './src/telas/projeto/home/Home';
import ResetSenha from './src/telas/projeto/resetSenha/Reset';
import Noticias from './src/telas/projeto/noticias/noticias';
import lixoMarrom from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/lixoMarrom';
import cascaDeBatata from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/cascaDeBatata';
import cascaDeBanana from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/cascaDeBanana';
import cascaDeLaranja from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/cascaDeLaranja';
import lixoVermelho from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/lixoVermelho';
import ioio from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/ioio';
import vasoDePlanta from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/vasoDePlanta';
import bilboque from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/bilboque';
import lixoAmarelo from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/lixoAmarelo';
import velasELanternas from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/velasELanternas'
import vasoMetal from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/vasoMetal'
import ReciclarMetal from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/ReciclarMetal'
import lixoVerde from './src/telas/projeto/tiposDeReciclagens/lixoVerde/lixoVerde';
import Terrario from './src/telas/projeto/tiposDeReciclagens/lixoVerde/terrario';
import copo_vidro from './src/telas/projeto/tiposDeReciclagens/lixoVerde/copo_vidro';
import ReciclarVidro from './src/telas/projeto/tiposDeReciclagens/lixoVerde/ReciclarVidro';



const Stack = createStackNavigator();

export default function App() {
  return (
      
  //<Home/>
  //<Cadastro/>
  //<Login/>
  //<CreditCardInfoScreen/>
  //<ResetSenha/>
  //<ProfileView/>
  //<Chat/>

      //  <NavigationContainer>
      //        <Stack.Navigator initialRouteName='Login'>
      //            <Stack.Screen name = "Home" component={HomeStart}/>
      //            <Stack.Screen name = "Cadastrar" component={Cadastrar}/>
      //            <Stack.Screen name = "Listar" component={Listar}/>
      //            <Stack.Screen name = "Atualizar" component={Atualizar}/>
      //        </Stack.Navigator>
      //    </NavigationContainer>

          <NavigationContainer>
              <Stack.Navigator initialRouteName='Home'>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#E4F6F2' }, headerTintColor: 'black', }} name = "Login" component={Login}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#E4F6F2' }, headerTintColor: 'black', }} name = "Cadastro" component={Cadastro}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#E4F6F2' }, headerTintColor: 'black', }} name = "ResetSenha" component={ResetSenha}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#E4F6F2' }, headerTintColor: 'black', }} name = "Home" component={Home}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#E4F6F2' }, headerTintColor: 'black', }} name= "Noticias" component={Noticias}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#934e35' }, headerTintColor: 'black', }} name= "Lixo Marrom" component={lixoMarrom}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#934e35' }, headerTintColor: 'black', }} name= "Casca De Batata" component={cascaDeBatata}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#934e35' }, headerTintColor: 'black', }} name= "Casca De Banana" component={cascaDeBanana}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#934e35' }, headerTintColor: 'black', }} name= "Casca De Laranja" component={cascaDeLaranja}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#ce1446'},  headerTintColor: 'black'}} name='Lixo Vermelho' component={lixoVermelho}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#ce1446'},  headerTintColor: 'black'}} name='Ioio' component={ioio}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#ce1446'},  headerTintColor: 'black'}} name='Vaso De Planta' component={vasoDePlanta}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#ce1446'},  headerTintColor: 'black'}} name='Bilboque' component={bilboque}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#e9e51e'},  headerTintColor: 'black'}} name='Lixo Amarelo' component={lixoAmarelo}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#e9e51e'},  headerTintColor: 'black'}} name='Velas E Lanternas' component={velasELanternas}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#e9e51e'},  headerTintColor: 'black'}} name='vaso Metal' component={vasoMetal}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#e9e51e'},  headerTintColor: 'black'}} name='Reciclar Metal' component={ReciclarMetal}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#02df0a'},  headerTintColor: 'black'}} name='Lixo Verde' component={lixoVerde}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#02df0a'},  headerTintColor: 'black'}} name='Terrário' component={Terrario}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#02df0a'},  headerTintColor: 'black'}} name='Copo de Vidro' component={copo_vidro}/>
                  <Stack.Screen options={{ headerStyle: { backgroundColor: '#02df0a'},  headerTintColor: 'black'}} name='Reciclar Vidro' component={ReciclarVidro}/>
              </Stack.Navigator>
          </NavigationContainer>

          // <NavigationContainer>
          //   <Stack.Navigator initialRouteName='AddCard'>
          //     <Stack.Screen name='AddCard' component={AddCards}/>
          //     <Stack.Screen name='CreditCardInfoScreen' component={CreditCardInfoScreen}/>
          //   </Stack.Navigator>
          // </NavigationContainer>



        

        

  )
};

