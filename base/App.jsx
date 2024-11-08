import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//IIMPORT DAS TELAS
import HomeScreen from './src/telas/projeto/home/home';
import Catadores from './src/telas/projeto/catadores/Catadores';
import Agendamento from './src/telas/projeto/agendamento/agendamento';
import ColetasAgendadas from './src/telas/projeto/agendamento/coletasAgendadas/coletasAgendadas.jsx';
import PontosDeReciclagem from './src/telas/projeto/encontrePontosDeReciclagem/pontosDeReciclagem';
import Reciclagem from './src/telas/projeto/paginaReciclagem/reciclagem';
import Perfil1 from './src/telas/projeto/perfil/perfil1';
//Lixo AMARELO
import lixoAmarelo from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/lixoAmarelo';
import ReciclarMetal from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/ReciclarMetal';
import vasoMetal from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/vasoMetal';
import velasELanterna from './src/telas/projeto/tiposDeReciclagens/lixoAmarelo/velasELanternas';
//Lixo AZUL
import lixoAzul from './src/telas/projeto/tiposDeReciclagens/lixoAzul/lixoAzul';
import papelMache from './src/telas/projeto/tiposDeReciclagens/lixoAzul/papelMache';
import papelPicado from './src/telas/projeto/tiposDeReciclagens/lixoAzul/papelPicado';
import reciclarAzul from './src/telas/projeto/tiposDeReciclagens/lixoAzul/reciclarAzul';
//Lixo LARANJA
import LixoLaranja from './src/telas/projeto/tiposDeReciclagens/lixoLaranja/LixoLaranja';
import ReciclarLaranja from './src/telas/projeto/tiposDeReciclagens/lixoAzul/ReciclarLaranja';
//Lixo MARROM
import lixoMarrom from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/lixoMarrom';
import cascaDeBanana from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/cascaDeBanana';
import cascaDeBatata from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/cascaDeBatata';
import cascaDeLaranja from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/cascaDeLaranja';
import ReciclarMarrom from './src/telas/projeto/tiposDeReciclagens/lixoMarrom/ReciclarMarrom';
//Lixo VERDE
import lixoVerde from './src/telas/projeto/tiposDeReciclagens/lixoVerde/lixoVerde';
import copo_vidro from './src/telas/projeto/tiposDeReciclagens/lixoVerde/copo_vidro';
import ReciclarVidro from './src/telas/projeto/tiposDeReciclagens/lixoVerde/ReciclarVidro';
import Terrario from './src/telas/projeto/tiposDeReciclagens/lixoVerde/terrario';
// Lixo VERMELHO
import lixoVermelho from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/lixoVermelho';
import bilboque from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/bilboque';
import Ioio from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/Ioio.jsx';
import reciclarVermelho from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/ReciclarVermelho';
import vasoDePlanta from './src/telas/projeto/tiposDeReciclagens/lixoVermelho/vasoDePlanta';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Catadores" component={Catadores} />
        <Stack.Screen name="Agendamento" component={Agendamento} />
        <Stack.Screen name="Coletas Agendadas" component={ColetasAgendadas} />
        <Stack.Screen name="Pontos de Reciclagem" component={PontosDeReciclagem} />
        <Stack.Screen name="Reciclagem" component={Reciclagem} />
        <Stack.Screen name="Perfil" component={Perfil1} />
        {/* Lixo AMARELO */}
        <Stack.Screen name="Lixo Amarelo" component={lixoAmarelo} />
        <Stack.Screen name="Reciclar Metal" component={ReciclarMetal} />
        <Stack.Screen name="Vaso Metal" component={vasoMetal} />
        <Stack.Screen name="Velas e Lanterna" component={velasELanterna} />
        {/* Lixo AZUL */}
        <Stack.Screen name="Lixo Azul" component={lixoAzul} />
        <Stack.Screen name="Papel Mache" component={papelMache} />
        <Stack.Screen name="Papel Picado" component={papelPicado} />
        <Stack.Screen name="Reciclar Azul" component={reciclarAzul} />
        {/* Lixo LARANJA */}
        <Stack.Screen name="Lixo Laranja" component={LixoLaranja} />
        <Stack.Screen name="Reciclar Laranja" component={ReciclarLaranja} />
        {/* Lixo MARROM */}
        <Stack.Screen name="Lixo Marrom" component={lixoMarrom} />
        <Stack.Screen name="Casca de Banana" component={cascaDeBanana} />
        <Stack.Screen name="Casca de Batata" component={cascaDeBatata} />
        <Stack.Screen name="Casca de Laranja" component={cascaDeLaranja} />
        <Stack.Screen name="Reciclar Marrom" component={ReciclarMarrom} />
        {/* Lixo VERDE */}
        <Stack.Screen name="Lixo Verde" component={lixoVerde} />
        <Stack.Screen name="Copo de Vidro" component={copo_vidro} />
        <Stack.Screen name="Reciclar Vidro" component={ReciclarVidro} />
        <Stack.Screen name="Terrario" component={Terrario} />
        {/* Lixo VERMELHO */}
        <Stack.Screen name="Lixo Vermelho" component={lixoVermelho} />
        <Stack.Screen name="Bilboque" component={bilboque} />
        <Stack.Screen name="Ioio" component={Ioio} />
        <Stack.Screen name="Reciclar Vermelho" component={reciclarVermelho} />
        <Stack.Screen name="Vaso de Planta" component={vasoDePlanta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}