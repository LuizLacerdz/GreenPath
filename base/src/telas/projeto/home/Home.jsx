import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';



const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    
      <View>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../../../res/img/logo.png')} style={styles.logo} />
        <Image source={require('../../../../res/img/fotoDePerfil.png')} style={styles.profilePic} />
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Olá, Luiz e Lorenzo</Text>

      {/* Next Collection Info */}
      <View style={styles.collectionInfo}>
        <Text style={styles.collectionText}>
          A próxima coleta municipal será em <Text style={styles.boldText}>08/12 - 18h</Text>
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver local</Text>
        </TouchableOpacity>
      </View>

      {/* Options */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Reciclagem')}>
          <Image source={require('../../../../res/img/local.png')} style={styles.icones} />
          <Text style={{fontWeight: "bold"}}>Veja pontos de coleta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Catadores')}>
          <Image source={require('../../../../res/img/pesquisa.png')} style={styles.icones} />
          <Text style={{fontWeight: "bold"}}>Encontrar catadores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Reciclagem')}>
          <Image source={require('../../../../res/img/reciclagem.png')} style={styles.icones} />
          <Text style={{fontWeight: "bold"}}>O que posso reciclar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Agendamento')}>
          <Image source={require('../../../../res/img/calendario.png')} style={styles.icones} />
          <Text style={{fontWeight: "bold"}}>Coletas agendadas</Text>
        </TouchableOpacity>
      </View>

      {/* Schedule Collection */}
      <TouchableOpacity style={styles.mapButton} onPress={() => navigation.navigate('Reciclagem')}>
        <Text style={styles.mapButtonText}>Ir para o mapa</Text>
      </TouchableOpacity>
      
      </View>
      </ScrollView>
      </SafeAreaView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E2F3E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  icones: {
    padding: 10,
    marginRight: 90,
  },
  profilePic: {
    width: 40,
    height: 40,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  collectionInfo: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  collectionText: {
    fontSize: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0A9D3C',
    padding: 10,
    borderRadius: 10,
    marginTop: 16,
    width: 100,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold"
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  optionButton: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  scheduleText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  mapButton: {
    borderWidth: 1,
    backgroundColor: '#0A9D3C',
    padding: 10,
    borderRadius: 5,
  },
  mapButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold"
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  containerCards: {
    marginBottom: 10,
    flexDirection: 'row',
  },

  mainCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  subtitulo: {
    marginLeft: 220,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#199A8E',
    marginTop: 12,
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    width: 115,
    height: 200,
    borderWidth: 1,
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#5D2828',
    height: 100,
    width: '100',
    resizeMode: 'contain',
  },
  image2: {
    backgroundColor: '#FF0000',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image3: {
    backgroundColor: '#0047B1',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image4: {
    backgroundColor: '#EBFF00',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image5: {
    backgroundColor: '#05FF00',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  image6: {
    backgroundColor: '#FF8A00',
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  content: {
    margin: 16,
    borderTopWidth: 1,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  titleS: {
    flexDirection: 'row',
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    width: 115,
    height: 200,
    borderWidth: 1,
  },
});

export default HomeScreen;